import useSWR from "swr";
import { z } from "zod";

const ConfigurationSchema = z.record(z.string(), z.unknown());

type Configuration = z.infer<typeof ConfigurationSchema>;

type TauriCore = {
  invoke: (cmd: string, args?: unknown) => Promise<unknown>;
};

declare global {
  interface Window {
    __TAURI__?: {
      core?: TauriCore;
    };
  }
}

async function getConfiguration(): Promise<Configuration> {
  const tauri = window.__TAURI__?.core;
  if (!tauri) {
    throw new Error("Tauri core bridge is unavailable");
  }

  const requestId = crypto.randomUUID();
  const result = await tauri.invoke("bridge_handle_query", {
    request: {
      method: "get-configuration",
      params: {},
      request_id: requestId,
    },
  });

  const EnvelopeSchema = z.object({
    response: z.object({
      ok: z.boolean(),
      request_id: z.string(),
      result: z.unknown().optional(),
      error: z
        .object({
          code: z.string(),
          message: z.string(),
        })
        .optional(),
    }),
  });
  const parsed = EnvelopeSchema.parse(result);
  if (!parsed.response.ok) {
    throw new Error(parsed.response.error?.message ?? "unknown query error");
  }
  return ConfigurationSchema.parse(parsed.response.result ?? {});
}

export function useHostConfiguration() {
  return useSWR("host/get-configuration", getConfiguration, {
    revalidateOnMount: true,
  });
}
