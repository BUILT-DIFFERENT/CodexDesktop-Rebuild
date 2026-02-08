(() => {
  const WINDOW_TYPE = "__WINDOW_TYPE__";
  const BUILD_FLAVOR = "__BUILD_FLAVOR__";
  const APP_SESSION_ID = "__APP_SESSION_ID__";

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
    if (appMessageUnsubscribe) {
      return;
    }
    const { listen } = getTauriEvent();
    appMessageUnsubscribe = await listen("codex_desktop:message-for-view", (event) => {
      window.dispatchEvent(
        new MessageEvent("message", {
          data: event.payload,
        }),
      );
    });
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
        if (workerEventUnsubscribers.has(workerId)) {
          return;
        }
        const { listen } = getTauriEvent();
        const unlisten = await listen(`codex_desktop:worker:${workerId}:for-view`, (event) => {
          const handlers = workerSubscriptions.get(workerId);
          if (!handlers) {
            return;
          }
          handlers.forEach((handler) => {
            try {
              handler(event.payload);
            } catch (error) {
              console.error("[electronBridgeCompat] worker callback failed", error);
            }
          });
        });
        workerEventUnsubscribers.set(workerId, unlisten);
      };
      void maybeSubscribe();

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
        const unlisten = workerEventUnsubscribers.get(workerId);
        if (unlisten) {
          void unlisten();
          workerEventUnsubscribers.delete(workerId);
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
      codexAppSessionId: APP_SESSION_ID,
    }),
    getAppSessionId: () => APP_SESSION_ID,
    getBuildFlavor: () => BUILD_FLAVOR,
  };

  window.codexWindowType = WINDOW_TYPE;
  window.electronBridge = electronBridge;
})();
