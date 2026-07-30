import type { ComponentType } from "react";
import Home from "./page";
import CctvPage from "./cctv-page";
import AccessControlPage from "./access-control-page";
import BarrierPage from "./barrier-page";
import MaintenancePage from "./maintenance-page";
import NotFoundPage from "./not-found-page";

export const routes: Record<string, ComponentType> = {
  "/": Home,
  "/services/cctv": CctvPage,
  "/services/access-control": AccessControlPage,
  "/services/car-park-barrier": BarrierPage,
  "/services/maintenance": MaintenancePage,
};

export function normalizePath(pathname: string) {
  return pathname.replace(/\/+$/, "") || "/";
}

export function getPageComponent(pathname: string) {
  return routes[normalizePath(pathname)] ?? NotFoundPage;
}
