import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import Home from "./components/Home/Home.tsx";
import Footer from "./components/Footer/Footer.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>
);
