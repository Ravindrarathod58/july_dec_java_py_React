import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
const arr = [
  {
    id: 1,
    name: "Apple",
  },
  {
    id: 2,
    name: "Apple",
  },
];
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App fruitsArr={arr} />
  </StrictMode>,
);
