import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./cart/context/index.ts";
import { SideBarProvider } from "./ui/context/SideBarProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CartProvider>
      <SideBarProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SideBarProvider>
    </CartProvider>
  </StrictMode>
);
