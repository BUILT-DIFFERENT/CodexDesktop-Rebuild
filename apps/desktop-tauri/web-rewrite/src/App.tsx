import { useHostConfiguration } from "./hooks/useHostQuery";

export function App() {
  const { data, error, isLoading, mutate } = useHostConfiguration();

  return (
    <main
      style={{
        fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
        padding: "24px",
        maxWidth: "960px",
        margin: "0 auto",
      }}
    >
      <h1>Codex Tauri Web Rewrite Scaffold</h1>
      <p>
        Stack integration baseline: <code>zod</code> + <code>SWR</code>
      </p>
      <div style={{ marginBottom: "12px" }}>
        <button type="button" onClick={() => void mutate()}>
          Refresh Host Configuration
        </button>
      </div>
      {isLoading && <p>Loading configuration from Rust host...</p>}
      {error && (
        <p style={{ color: "crimson" }}>
          Error: {error instanceof Error ? error.message : String(error)}
        </p>
      )}
      <pre
        style={{
          border: "1px solid #ddd",
          background: "#fafafa",
          borderRadius: "8px",
          padding: "12px",
          overflowX: "auto",
        }}
      >
        {JSON.stringify(data ?? {}, null, 2)}
      </pre>
    </main>
  );
}
