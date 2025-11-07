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
  <>
    <div className="column">
      <div className="parallax sky"></div>
      <div className="parallax far"></div>
      <div className="parallax medium"></div>
      <div className="parallax near"></div>
      <BodyMovin
        style={{
          width: "300px",
          height: "300px",
          marginBottom: "-65px",
          zIndex: "1",
        }}
        src="/tosi.json"
      />
      <ToDo />
      <Markdown class="doc" src="/use-tosi.md" />
    </div>
  </>,
);
