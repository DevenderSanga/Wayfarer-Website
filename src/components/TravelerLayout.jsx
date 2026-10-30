
import { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useNavigate
} from "react-router-dom";

import {
  FiCompass,
  FiGrid,
  FiBriefcase,
  FiMap,
  FiFileText,
  FiBell,
  FiUser,
  FiLogOut,
  FiMoon,
  FiSun,
  FiGlobe
} from "react-icons/fi";

import "../styles/TravelerDashboard.css";

const links = [
  { to: "/traveler/dashboard", label: "Overview", icon: <FiGrid /> },
  { to: "/traveler/trips", label: "My trips", icon: <FiBriefcase /> },
  { to: "/traveler/itinerary", label: "Itinerary", icon: <FiMap /> },
  { to: "/traveler/documents", label: "Documents", icon: <FiFileText /> },
  { to: "/traveler/updates", label: "Updates", icon: <FiBell /> },
  { to: "/traveler/profile", label: "Profile", icon: <FiUser /> }
];

export default function TravelerLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("wayfarerTravelerTheme") === "dark"
  );

  const [rtl, setRtl] = useState(
    () => localStorage.getItem("wayfarerTravelerDirection") === "rtl"
  );

  const activePage =
    links.find((item) => item.to === location.pathname)?.label || "Overview";

  useEffect(() => {
    document.documentElement.classList.toggle("theme-dark", darkMode);
    document.documentElement.style.colorScheme = darkMode ? "dark" : "light";

    localStorage.setItem(
      "wayfarerTravelerTheme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  useEffect(() => {
    document.documentElement.dir = rtl ? "rtl" : "ltr";

    localStorage.setItem(
      "wayfarerTravelerDirection",
      rtl ? "rtl" : "ltr"
    );
  }, [rtl]);

  function handleSignOut() {
    const confirmed = window.confirm(
      "Are you sure you want to leave the traveler dashboard?"
    );

    if (confirmed) {
      navigate("/", { replace: true });
    }
  }

  return (
    <div className="traveler-shell">
      <aside className="traveler-sidebar">
        <Link to="/" className="traveler-brand">
          <span className="traveler-brand-icon">
            <FiCompass />
          </span>
          <span>Wayfarer</span>
        </Link>

        <p className="traveler-nav-label">TRAVELER MENU</p>

        <nav className="traveler-nav" aria-label="Traveler navigation">
          {links.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/traveler/dashboard"}
              className={({ isActive }) =>
                `traveler-nav-link${isActive ? " active" : ""}`
              }
            >
              {item.icon}
              <span>{item.label}</span>

              {item.label === "Updates" && (
                <span className="traveler-notification-count">3</span>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="traveler-sidebar-bottom">
          <button
            type="button"
            className="traveler-signout"
            onClick={handleSignOut}
          >
            <FiLogOut />
            <span>Sign out</span>
          </button>

          <p className="traveler-sidebar-note">
            Wayfarer · Traveler Demo
          </p>
        </div>
      </aside>

      <main className="traveler-main">
        <header className="traveler-topbar">
          <div className="traveler-heading">
            <h2>{activePage}</h2>
            <p>
              {activePage === "Overview"
                ? "Your next adventure is just around the corner."
                : `Manage your ${activePage.toLowerCase()} information.`}
            </p>
          </div>

          <div className="traveler-top-actions">
            <button
              type="button"
              className="traveler-round-button"
              onClick={() => setDarkMode((current) => !current)}
              title={darkMode ? "Switch to light theme" : "Switch to dark theme"}
              aria-label="Toggle theme"
            >
              {darkMode ? <FiSun /> : <FiMoon />}
            </button>

            <button
              type="button"
              className="traveler-round-button"
              title="Open updates"
              aria-label="Open updates"
              onClick={() => navigate("/traveler/updates")}
            >
              <FiBell />
            </button>

            <button
              type="button"
              className="traveler-direction-button"
              onClick={() => setRtl((current) => !current)}
              title="Change text direction"
            >
              <FiGlobe /> {rtl ? "RTL" : "LTR"}
            </button>

            <div className="traveler-profile-summary">
              <div className="traveler-profile-avatar">J</div>
              <div>
                <strong>Jordan Rivera</strong>
                <span>Traveler demo</span>
              </div>
            </div>
          </div>
        </header>

        <div className="traveler-content">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
