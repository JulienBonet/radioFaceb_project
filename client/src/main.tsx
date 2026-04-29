import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import './assets/css/common_style.css';
import Header from "./components/Header/Header";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>
);
