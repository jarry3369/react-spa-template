import React from "react";
import ReactDOM from "react-dom/client";

import { HashRouter } from "react-router-dom";

import { MantineProvider } from "@mantine/core";
import FileRoutes from "./core/route";

import "./index.css";
import "@mantine/core/styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider
      theme={{
        fontFamily: "Pretendard",
        primaryColor: "blue",
        colors: {
          red: [
            "#CD2632",
            "#CD2632",
            "#CD2632",
            "#CD2632",
            "#CD2632",
            "#CD2632",
            "#CD2632",
            "#CD2632",
            "#CD2632",
            "#CD2632",
          ],
          blue: [
            "#2371CE",
            "#2371CE",
            "#2371CE",
            "#2371CE",
            "#2371CE",
            "#2371CE",
            "#2371CE",
            "#2371CE",
            "#2371CE",
            "#2371CE",
          ],
          lightblue: [
            "#3DABFA",
            "#3DABFA",
            "#3DABFA",
            "#3DABFA",
            "#3DABFA",
            "#3DABFA",
            "#3DABFA",
            "#3DABFA",
            "#3DABFA",
            "#3DABFA",
          ],
          darkblue: [
            "#1B284D",
            "#1B284D",
            "#1B284D",
            "#1B284D",
            "#1B284D",
            "#1B284D",
            "#1B284D",
            "#1B284D",
            "#1B284D",
            "#1B284D",
          ],
          black: [
            "#111111",
            "#111111",
            "#111111",
            "#111111",
            "#111111",
            "#111111",
            "#111111",
            "#111111",
            "#111111",
            "#111111",
          ],
          gray: [
            "#F7F7F7",
            "#F7F7F7",
            "#CCCCCC",
            "#F7F7F7",
            "#F7F7F7",
            "#666666",
            "#F7F7F7",
            "#F7F7F7",
            "#F7F7F7",
            "#F7F7F7",
          ],
          subtext: [
            "#666666",
            "#666666",
            "#666666",
            "#666666",
            "#666666",
            "#666666",
            "#666666",
            "#666666",
            "#666666",
            "#666666",
          ],
        },
      }}
    >
      <HashRouter>
        <FileRoutes />
      </HashRouter>
    </MantineProvider>
  </React.StrictMode>
);
