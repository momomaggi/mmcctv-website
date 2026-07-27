import React from "react";
import { createRoot } from "react-dom/client";
import Home from "./page";
import CctvPage from "./cctv-page";
import AccessControlPage from "./access-control-page";
import BarrierPage from "./barrier-page";
import "./styles.css";

const normalizedPath = window.location.pathname.replace(/\/+$/, "") || "/";
const CurrentPage =
  normalizedPath === "/services/cctv"
    ? CctvPage
    : normalizedPath === "/services/access-control"
      ? AccessControlPage
      : normalizedPath === "/services/car-park-barrier"
        ? BarrierPage
      : Home;

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CurrentPage />
  </React.StrictMode>,
);
