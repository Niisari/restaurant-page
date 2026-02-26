import "./styles/Reset.css";
import "./styles/Global.css";

import App from "./App.js";

// Wait for the DOM to be ready before firing off your logic
document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("app");
  new App(root).init();
});
