// src/routes/ConfigRoutes.tsx

import { Routes, Route } from "react-router";
import AppLayout from "../layout/AppLayout"; // Reutilizamos tu layout principal
import Users from "../pages/Configurations/Users";

function ConfigRoutes() {
  return (
    <Routes>
      {/* Las rutas de configuración se anidan dentro del AppLayout */}
      <Route element={<AppLayout />}>
        <Route path="usuarios" element={<Users />} />
      </Route>
    </Routes>
  );
}

export default ConfigRoutes;