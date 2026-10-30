
import { Link } from "react-router-dom";
import {
  FiCompass,
  FiInstagram,
  FiFacebook,
  FiTwitter,
  FiMail,
  FiPhone,
  FiArrowUpRight
} from "react-icons/fi";

import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">

      <div className="footer-main">

        {/* Brand */}
        <div className="footer-brand-section">
          <Link to="/" className="footer-logo">
            <FiCompass />
            <span>wayfarer<span className="footer-dot">.</span></span>
          </Link>

          <p className="footer-tagline">
            Go somewhere that moves you.
          </p>

          <p className="footer-description">
            Discover extraordinary destinations, meaningful experiences,
            and unforgettable adventures with us.
          </p>

          <div className="footer-socials">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FiInstagram />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FiFacebook />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer" aria-label="Twitter">
              <FiTwitter />
            </a>
          </div>
        </div>

        {/* Explore */}
        <div className="footer-links">
          <h3>Explore</h3>
          <Link to="/">Home</Link>
          <Link to="/trips">All Trips</Link>
          <Link to="/trips">Destinations</Link>
          <Link to="/trips">Experiences</Link>
        </div>

        {/* Company */}
        <div className="footer-links">
          <h3>Company</h3>
          <Link to="/#about">About Us</Link>
          <Link to="/#contact">Contact</Link>
          <Link to="/trips">Travel With Us</Link>
          <Link to="/traveler/dashboard">Traveler Portal</Link>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h3>Let's connect</h3>

          <a href="mailto:hello@wayfarer.travel">
            <FiMail />
            hello@wayfarer.travel
            <FiArrowUpRight className="footer-external-icon" />
          </a>

          <a href="tel:+351210000000">
            <FiPhone />
            +351 21 000 0000
          </a>

          <p>Lisbon, Portugal</p>
          <span>WET · Lisbon</span>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2026 Wayfarer Travel Co. All rights reserved.</p>

        <p className="footer-bottom-message">
          Made for curious travelers <span>✦</span>
        </p>
      </div>

    </footer>
  );
}
