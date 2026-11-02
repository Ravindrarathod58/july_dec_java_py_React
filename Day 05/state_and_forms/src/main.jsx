import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import App from "./App.jsx";
import Registration from "./RegistrationForm.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <Registration />
  </StrictMode>,
);
