
import { useState } from "react";
import { NavLink, Outlet, Link, useNavigate } from "react-router-dom";

import {
  FiCompass,
  FiGrid,
  FiCalendar,
  FiBarChart2,
  FiUsers,
  FiSettings,
  FiLogOut,
  FiMoon,
  FiSun,
  FiGlobe,
  FiPlus
} from "react-icons/fi";

import "../styles/AdminDashboard.css";

export default function AdminLayout() {
  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("wayfarerTheme") === "dark"
  );

  const [rtl, setRtl] = useState(
    () => localStorage.getItem("wayfarerDirection") === "rtl"
  );

  function toggleTheme() {
    const next = !darkMode;

    setDarkMode(next);

    document.documentElement.classList.toggle("theme-dark", next);
    document.documentElement.style.colorScheme = next ? "dark" : "light";

    localStorage.setItem("wayfarerTheme", next ? "dark" : "light");
  }

  function toggleDirection() {
    const next = !rtl;

    setRtl(next);

    document.documentElement.dir = next ? "rtl" : "ltr";

    localStorage.setItem(
      "wayfarerDirection",
      next ? "rtl" : "ltr"
    );
  }

  function handleLogout() {
    navigate("/");
  }

  const links = [
    { to: "/admin/dashboard", label: "Overview", icon: <FiGrid /> },
    { to: "/admin/bookings", label: "Bookings", icon: <FiCalendar /> },
    { to: "/admin/reports", label: "Reports", icon: <FiBarChart2 /> },
    { to: "/admin/travelers", label: "Travelers", icon: <FiUsers /> },
    { to: "/admin/settings", label: "Settings", icon: <FiSettings /> },
    { to: "/admin/trips", label: "Manage trips", icon: <FiCompass /> }
  ];

  return (
    <div className="way-admin">

      {/* Sidebar */}
      <aside className="way-sidebar">

        <Link to="/" className="way-brand">
          <span className="way-brand-icon">
            <FiCompass />
          </span>
          <span>Wayfarer</span>
        </Link>

        <p className="way-sidebar-label">MANAGE</p>

        <nav className="way-nav">
          {links.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `way-nav-link${isActive ? " active" : ""}`
              }
            >
              {item.icon}
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Sidebar bottom */}
        <div className="way-sidebar-bottom">

          <div className="way-avatar">A</div>

          <div className="way-user-details">
            <strong>Administrator</strong>
            <span>Admin account</span>
          </div>

          <button
            className="way-icon-button"
            onClick={handleLogout}
            title="Back to Home"
            aria-label="Back to Home"
          >
            <FiLogOut />
          </button>

        </div>
      </aside>

      {/* Main content */}
      <main className="way-admin-main">

        {/* Topbar */}
        <header className="way-topbar">

          <div className="way-topbar-heading">
            <h2>Overview</h2>
            <p>Welcome to your Wayfarer travel workspace.</p>
          </div>

          <div className="way-topbar-actions">

            {/* Dark mode */}
            <button
              className="way-round-button"
              onClick={toggleTheme}
              title="Toggle theme"
              aria-label="Toggle theme"
            >
              {darkMode ? <FiSun /> : <FiMoon />}
            </button>

            {/* RTL / LTR */}
            <button
              className="way-direction-button"
              onClick={toggleDirection}
              title="Toggle text direction"
            >
              <FiGlobe /> {rtl ? "RTL" : "LTR"}
            </button>

            {/* New booking */}
            <Link to="/trips" className="way-new-booking">
              <FiPlus /> New booking
            </Link>

            {/* Admin profile */}
            <div className="way-topbar-user">

              <div className="way-avatar">A</div>

              <div className="way-user-details">
                <strong>Administrator</strong>
                <span>Admin</span>
              </div>

            </div>

          </div>
        </header>

        {/* Child pages appear here */}
        <div className="way-admin-content">
          <Outlet />
        </div>

      </main>
    </div>
  );
}
