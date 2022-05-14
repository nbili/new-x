import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { Count, Component } from "./Part1";
import { Parent } from "./Part2/GlobalState";

function Root() {
  return (
    <>
      <Count />
      <hr style={{ margin: "20px" }} />
      <Component />
      <hr style={{ margin: "20px" }} />
      <Parent />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
