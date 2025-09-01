import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppointmentProvider } from "./contexts/AppointmentContext";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AppointmentProvider>
        <App />
      </AppointmentProvider>
    </BrowserRouter>
  </StrictMode>
);
