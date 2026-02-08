import React from "react";
import { createRoot } from "react-dom/client";
import { SWRConfig } from "swr";
import { App } from "./App";

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SWRConfig
      value={{
        revalidateOnFocus: false,
        dedupingInterval: 10_000,
      }}
    >
      <App />
    </SWRConfig>
  </React.StrictMode>
);
