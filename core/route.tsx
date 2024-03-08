import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import { Layout } from "../components/Layout";

/* DO NOT MODIFY **/

const PRESERVED = import.meta.glob<Record<string, string>>(
  "../pages/(_app|_signin|404).{js,jsx,ts,tsx}",
  {
    eager: true,
  }
);
const ROUTES = import.meta.glob<Record<string, string>>(
  "../pages/**/!(use*){_*[0-9],[a-z]}*.{js,jsx,ts,tsx}",
  {
    eager: true,
  }
);

const preserve: servedType = Object.keys(PRESERVED).reduce((p, file) => {
  const key = file.replace(/\.\.\/pages\/|\.(js|jsx|ts|tsx)$/g, "");
  return { ...p, [key]: PRESERVED[file].default };
}, {});

const routes = Object.keys(ROUTES).map((route) => {
  const path = route
    .replace(/\.\.\/pages|index|_\^\d|\.(js|jsx|ts|tsx)$/g, "")
    .replace(/\[\.{3}[^/]+\]/, "*")
    .replace(/\[([^/]+)\]/g, ":$1");

  return { path, component: ROUTES[route].default };
});

export { routes };

export default function FileRoutes() {
  const App = preserve?.["_app"] || Fragment;
  const NotFound = preserve?.["404"] || Fragment;

  return (
    <App>
      <Routes>
        <Route element={<Layout />}>
          {routes.map(({ path, component: Component = Fragment }) => {
            return <Route key={path} path={path} element={<Component />} />;
          })}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </App>
  );
}
