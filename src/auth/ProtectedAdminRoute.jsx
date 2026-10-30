import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext.jsx";
export default function ProtectedAdminRoute() {
  const { admin } = useAuth();
  return admin?.role === "admin" ? <Outlet /> : <Navigate to="/admin/login" replace />;
}