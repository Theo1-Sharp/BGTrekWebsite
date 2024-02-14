import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Home from "./components/Home/Home.tsx";
import PageResize from "./components/PageResize/PageResize.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PageResize>
      <Home />
    </PageResize>
  </React.StrictMode>
);
