import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ContextWrapper from "./context/ContextWrapper.jsx";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextWrapper>
      <App />
    </ContextWrapper>
  </StrictMode>
);
