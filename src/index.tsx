import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import "./i18n";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <React.Suspense fallback="loading"> {/* i18next is now async */}
      <App />
    </React.Suspense>
  </React.StrictMode>
);
