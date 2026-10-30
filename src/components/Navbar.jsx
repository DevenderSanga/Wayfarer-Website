
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  FiCompass,
  FiChevronDown,
  FiMoon,
  FiSun,
  FiGlobe,
  FiMenu,
  FiX,
  FiHome,
  FiMap,
  FiGrid,
  FiBriefcase,
  FiImage,
  FiInfo,
  FiMail,
  FiArrowUpRight,
  FiUser
} from "react-icons/fi";

export default function Navbar() {
  const [homeOpen, setHomeOpen] = useState(false);
  const [dashboardOpen, setDashboardOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("wayfarerTheme") === "dark"
  );

  const [rtl, setRtl] = useState(
    () => localStorage.getItem("wayfarerDirection") === "rtl"
  );

  const location = useLocation();

  // Apply and save dark mode
  useEffect(() => {
    document.documentElement.classList.toggle("theme-dark", darkMode);
    document.documentElement.style.colorScheme = darkMode ? "dark" : "light";

    localStorage.setItem(
      "wayfarerTheme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  // Apply and save text direction
  useEffect(() => {
    document.documentElement.dir = rtl ? "rtl" : "ltr";

    localStorage.setItem(
      "wayfarerDirection",
      rtl ? "rtl" : "ltr"
    );
  }, [rtl]);

  // Close dropdowns when navigating to another page
  useEffect(() => {
    setHomeOpen(false);
    setDashboardOpen(false);
    setMobileOpen(false);
  }, [location.pathname]);

  const closeMenus = () => {
    setHomeOpen(false);
    setDashboardOpen(false);
    setMobileOpen(false);
  };

  const toggleHome = () => {
    setHomeOpen((previous) => !previous);
    setDashboardOpen(false);
  };

  const toggleDashboard = () => {
    setDashboardOpen((previous) => !previous);
    setHomeOpen(false);
  };

  return (
    <header className="site-nav">
      {/* Brand */}
      <Link
        to="/"
        className="brand"
        onClick={closeMenus}
        aria-label="Wayfarer home"
      >
        <span className="brand-mark">
          <FiCompass />
        </span>
        <span>Wayfarer</span>
      </Link>

      {/* Mobile menu button */}
      <button
        type="button"
        className="mobile-menu"
        onClick={() => setMobileOpen((previous) => !previous)}
        aria-label={
          mobileOpen ? "Close navigation" : "Open navigation"
        }
        aria-expanded={mobileOpen}
      >
        {mobileOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Main navigation */}
      <nav
        className={
          mobileOpen
            ? "nav-links nav-links-open"
            : "nav-links"
        }
        aria-label="Main navigation"
      >
        {/* Home dropdown */}
        <div className="nav-dropdown-wrap">
          <button
            type="button"
            className="nav-dropdown-trigger"
            onClick={toggleHome}
            aria-expanded={homeOpen}
          >
            Home <FiChevronDown />
          </button>

          {homeOpen && (
            <div className="nav-dropdown">
              <Link to="/" onClick={closeMenus}>
                <FiHome /> Home 1
              </Link>

              <Link to="/trips" onClick={closeMenus}>
               <FiHome /> Home 2
              </Link>
            </div>
          )}
        </div>

        {/* Public website sections */}
        <a href="/services" onClick={closeMenus}>
          <FiBriefcase className="mobile-link-icon" />
          Services
        </a>

        <a href="/#gallery" onClick={closeMenus}>
          <FiImage className="mobile-link-icon" />
          Gallery
        </a>

        <a href="/about" onClick={closeMenus}>
          <FiInfo className="mobile-link-icon" />
          About
        </a>

        <a href="/contact" onClick={closeMenus}>
          <FiMail className="mobile-link-icon" />
          Contact
        </a>

        {/* Dashboard selector */}
        <div className="nav-dropdown-wrap dashboard-dropdown-wrap">
          <button
            type="button"
            className="nav-dropdown-trigger"
            onClick={toggleDashboard}
            aria-expanded={dashboardOpen}
          >
            Dashboards <FiChevronDown />
          </button>

          {dashboardOpen && (
            <div className="nav-dropdown nav-dropdown-right">
              <Link
                to="/admin/dashboard"
                onClick={closeMenus}
              >
                <FiGrid />
                Admin 
              </Link>

              <Link
                to="/traveler/dashboard"
                onClick={closeMenus}
              >
                <FiUser />
                Traveler
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Right-side actions */}
      <div className="nav-actions">
        {/* Dark mode */}
        <button
          type="button"
          className="nav-round-button"
          onClick={() => setDarkMode((previous) => !previous)}
          aria-label={
            darkMode
              ? "Switch to light mode"
              : "Switch to dark mode"
          }
          title={darkMode ? "Light mode" : "Dark mode"}
        >
          {darkMode ? <FiSun /> : <FiMoon />}
        </button>

        {/* Text direction */}
        <button
          type="button"
          className="nav-language-button"
          onClick={() => setRtl((previous) => !previous)}
          title="Toggle text direction"
          aria-label="Toggle left-to-right or right-to-left layout"
        >
          <FiGlobe />
          <span>{rtl ? "RTL" : "LTR"}</span>
        </button>

        {/* Book now */}
        <Link
          to="/trips"
          className="nav-book-button"
          onClick={closeMenus}
        >
          Book Now <FiArrowUpRight />
        </Link>
      </div>
    </header>
  );
}
