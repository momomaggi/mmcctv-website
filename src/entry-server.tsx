import React from "react";
import { renderToString } from "react-dom/server";
import { getPageComponent } from "./routes";

export function renderPage(pathname: string) {
  const CurrentPage = getPageComponent(pathname);

  return renderToString(
    <React.StrictMode>
      <CurrentPage />
    </React.StrictMode>,
  );
}
