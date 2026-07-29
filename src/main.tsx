import React from "react";
import { createRoot } from "react-dom/client";
import Home from "./page";
import CctvPage from "./cctv-page";
import AccessControlPage from "./access-control-page";
import BarrierPage from "./barrier-page";
import MaintenancePage from "./maintenance-page";
import NotFoundPage from "./not-found-page";
import { applyPageMetadata } from "./metadata";
import "./styles.css";

const normalizedPath = window.location.pathname.replace(/\/+$/, "") || "/";
applyPageMetadata(normalizedPath);

const routes: Record<string, React.ComponentType> = {
  "/": Home,
  "/services/cctv": CctvPage,
  "/services/access-control": AccessControlPage,
  "/services/car-park-barrier": BarrierPage,
  "/services/maintenance": MaintenancePage,
};

const CurrentPage = routes[normalizedPath] ?? NotFoundPage;

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CurrentPage />
  </React.StrictMode>,
);
