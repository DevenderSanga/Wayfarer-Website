import { createContext, useContext, useState } from "react";
const AuthContext = createContext(null);
export function AuthProvider({ children }) {
  const [admin, setAdmin] = useState(() => {
    try { return JSON.parse(localStorage.getItem("wayfarerAdmin")); } catch { return null; }
  });
  const login = (email, password) => {
    if (email.trim().toLowerCase() === "admin@wayfarer.com" && password === "Admin@123") {
      const user = { email: email.trim(), role: "admin" };
      localStorage.setItem("wayfarerAdmin", JSON.stringify(user));
      setAdmin(user);
      return true;
    }
    return false;
  };
  const logout = () => { localStorage.removeItem("wayfarerAdmin"); setAdmin(null); };
  return <AuthContext.Provider value={{ admin, login, logout }}>{children}</AuthContext.Provider>;
}
export function useAuth() { return useContext(AuthContext); }