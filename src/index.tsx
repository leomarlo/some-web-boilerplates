import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';

const root: HTMLElement = document.getElementById("root") as HTMLElement;
createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


