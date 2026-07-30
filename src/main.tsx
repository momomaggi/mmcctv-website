import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { applyPageMetadata } from "./metadata";
import { getPageComponent, normalizePath } from "./routes";
import "./styles.css";

const normalizedPath = normalizePath(window.location.pathname);
applyPageMetadata(normalizedPath);

const CurrentPage = getPageComponent(normalizedPath);
const root = document.getElementById("root");

if (!root) {
  throw new Error("Missing root element");
}

const app = (
  <React.StrictMode>
    <CurrentPage />
  </React.StrictMode>
);

if (root.hasChildNodes()) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
