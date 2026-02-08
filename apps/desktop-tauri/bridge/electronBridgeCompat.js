(() => {
  const WINDOW_TYPE = "__WINDOW_TYPE__";
  const flavor = __BUILD_FLAVOR__;
  const session = __APP_SESSION_ID__;

  const workerSubscriptions = new Map();
  const workerEventUnsubscribers = new Map();
  let appMessageUnsubscribe = null;

  function getTauriCore() {
    if (!window.__TAURI__?.core?.invoke) {
      throw new Error("Tauri core invoke API not available");
    }
    return window.__TAURI__.core;
  }

  function getTauriEvent() {
    if (!window.__TAURI__?.event?.listen) {
      throw new Error("Tauri event API not available");
    }
    return window.__TAURI__.event;
  }

  async function ensureAppMessageSubscription() {
    if (!appMessageUnsubscribe) {
      const { listen } = getTauriEvent();
      const listenPromise = listen("codex_desktop:message-for-view", (event) => {
        window.dispatchEvent(
          new MessageEvent("message", {
            data: event.payload,
          }),
        );
      })
        .then((unlisten) => {
          if (appMessageUnsubscribe === listenPromise) {
            appMessageUnsubscribe = unlisten;
          } else {
            void unlisten();
          }
          return unlisten;
        })
        .catch((error) => {
          if (appMessageUnsubscribe === listenPromise) {
            appMessageUnsubscribe = null;
          }
          throw error;
        });
      appMessageUnsubscribe = listenPromise;
    }
    if (typeof appMessageUnsubscribe === "function") {
      return;
    }
    await appMessageUnsubscribe;
  }

  const electronBridge = {
    windowType: WINDOW_TYPE,
    sendMessageFromView: async (payload) => {
      await ensureAppMessageSubscription();
      await getTauriCore().invoke("bridge_send_message_from_view", { payload });
    },
    getPathForFile: (input) => {
      if (!input) {
        return null;
      }
      if (typeof input === "string") {
        return input;
      }
      if (typeof input.path === "string" && input.path.length > 0) {
        return input.path;
      }
      return null;
    },
    sendWorkerMessageFromView: async (workerId, payload) => {
      await getTauriCore().invoke("bridge_send_worker_message_from_view", {
        workerId,
        payload,
      });
    },
    subscribeToWorkerMessages: (workerId, callback) => {
      if (!workerSubscriptions.has(workerId)) {
        workerSubscriptions.set(workerId, new Set());
      }
      const callbackSet = workerSubscriptions.get(workerId);
      callbackSet.add(callback);

      const maybeSubscribe = async () => {
        const existing = workerEventUnsubscribers.get(workerId);
        if (existing) {
          await Promise.resolve(existing);
          return;
        }
        const { listen } = getTauriEvent();
        const listenPromise = listen(`codex_desktop:worker:${workerId}:for-view`, (event) => {
          const callbacks = workerSubscriptions.get(workerId);
          if (!callbacks) {
            return;
          }
          callbacks.forEach((handler) => {
            try {
              handler(event.payload);
            } catch (error) {
              console.error("[electronBridgeCompat] worker callback failed", error);
            }
          })
        })
          .then((unlisten) => {
            if (workerEventUnsubscribers.get(workerId) === listenPromise) {
              workerEventUnsubscribers.set(workerId, unlisten);
            } else {
              void unlisten();
            }
            return unlisten;
          })
          .catch((error) => {
            if (workerEventUnsubscribers.get(workerId) === listenPromise) {
              workerEventUnsubscribers.delete(workerId);
            }
            throw error;
          });
        workerEventUnsubscribers.set(workerId, listenPromise);
        await listenPromise;
      };
      void maybeSubscribe().catch((error) => {
        console.error("[electronBridgeCompat] failed to subscribe worker events", error);
      });

      return () => {
        const handlers = workerSubscriptions.get(workerId);
        if (!handlers) {
          return;
        }
        handlers.delete(callback);
        if (handlers.size > 0) {
          return;
        }
        workerSubscriptions.delete(workerId);
        const unlistenEntry = workerEventUnsubscribers.get(workerId);
        if (unlistenEntry) {
          workerEventUnsubscribers.delete(workerId);
          void Promise.resolve(unlistenEntry)
            .then((unlisten) => {
              if (typeof unlisten === "function") {
                return unlisten();
              }
              return undefined;
            })
            .catch((error) => {
              console.error("[electronBridgeCompat] failed to unsubscribe worker events", error);
            });
        }
      };
    },
    showContextMenu: async (payload) => {
      await getTauriCore().invoke("bridge_show_context_menu", { payload });
    },
    triggerSentryTestError: async () => {
      await getTauriCore().invoke("bridge_trigger_sentry_test");
    },
    getSentryInitOptions: () => ({
      codexAppSessionId: session,
    }),
    getAppSessionId: () => session,
    getBuildFlavor: () => flavor,
  };

  window.codexWindowType = WINDOW_TYPE;
  window.electronBridge = electronBridge;
})();
