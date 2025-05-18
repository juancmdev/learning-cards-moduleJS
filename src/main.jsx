import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import App from "./App";
import "./index.css";
import VerbToBe from "./pages/VerbToBe";
import VerbToHave from "./pages/VerbToHave";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <Routes>
        <Route element={<VerbToBe />}>
          <Route path="VerbToBe" element={<VerbToBe />} />
        </Route>
        <Route element={<VerbToHave />}>
          <Route path="VerbToHave" element={<VerbToHave />} />
        </Route>
        <Route path="/" element={<VerbToBe />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
