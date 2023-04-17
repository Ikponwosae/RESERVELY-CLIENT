import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Modal from "react-modal";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import ReactDOM from 'react-dom';

//core style dashboard
import "../src/scss/volt.scss";

// vendor styles
import "react-datetime/css/react-datetime.css";

Modal.setAppElement("#root");

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/*" element={<App />} />
    </Routes>
  </BrowserRouter>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
