import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.jsx";
import "./css/index.css";
import { Dashboard } from "./pages/Dashboard.jsx";
import { DashboardBarber } from "./pages/DashboardBarber.jsx";
import { HomeBarber } from "./pages/HomeBarber.jsx";
import { Login } from "./pages/login.jsx";
import { NotFound } from "./pages/NotFound.jsx";
import { Signup } from "./pages/Signup.jsx";
import { DashboardClient } from "./pages/DashboardClient.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard-barber" element={<DashboardBarber />} />
          <Route path="/home-barber" element={<HomeBarber />} />
          <Route path="/dashboard-client" element={<DashboardClient />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
