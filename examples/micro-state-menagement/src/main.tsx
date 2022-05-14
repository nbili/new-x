import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { Count, Component } from "./Part1";

function Root() {
  return (
    <>
      <Count />
      <hr style={{ margin: "20px" }} />
      <Component />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
