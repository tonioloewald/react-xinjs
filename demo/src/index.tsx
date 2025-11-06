import React from "react";
import ReactDOM from "react-dom/client";
import ToDo from "./todo";
import "tosijs-ui";
import { reactWebComponents } from "react-tosijs";

const container = document.querySelector("main");

const BodyMovin = reactWebComponents.xinLottie;
const Markdown = reactWebComponents.xinMd;

const root = ReactDOM.createRoot(container);

root.render(
  <div
    style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
  >
    <BodyMovin
      style={{ width: "300px", height: "300px", marginBottom: "-65px" }}
      src="/tosi.json"
    />
    <ToDo />
    <Markdown
      style={{
        fontFamily: "Helvetic Neue, Sans-serif",
        maxWidth: "40em",
        background: "#fdfdfd",
        margin: "2em 0",
        padding: "2em",
        borderRadius: "0.25em",
        boxShadow: "0 2px 4px #0004",
      }}
      src="/use-tosi.md"
    />
  </div>,
);
