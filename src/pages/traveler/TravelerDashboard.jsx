
import "../../styles/TravelerDashboard.css";
import {
  FiMapPin,
  FiCalendar,
  FiBriefcase,
  FiFileText,
  FiAward,
  FiCheckCircle,
  FiClock,
  FiArrowUpRight
} from "react-icons/fi";
import { Link } from "react-router-dom";

const demoTrip = {
  title: "Temples & Tea of Kyoto",
  location: "Kyoto, Japan",
  date: "Sample itinerary",
  image:
    "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1600&q=85"
};

const updates = [
  {
    title: "Your guide is confirmed",
    detail: "Your local guide details will appear here.",
    time: "Recent update",
    icon: <FiCheckCircle />,
    color: "green"
  },
  {
    title: "Review your travel documents",
    detail: "Check that your travel information is ready.",
    time: "Action recommended",
    icon: <FiFileText />,
    color: "yellow"
  },
  {
    title: "Trip itinerary",
    detail: "Your sample itinerary is available to review.",
    time: "Trip information",
    icon: <FiCalendar />,
    color: "blue"
  }
];

const documents = [
  { name: "Passport", status: "Verified", type: "verified" },
  { name: "Travel insurance", status: "In review", type: "pending" },
  { name: "Trip confirmation", status: "Ready", type: "verified" },
  { name: "Flight details", status: "Pending", type: "pending" }
];

export default function TravelerDashboard() {
  return (
    <main className="traveler-page">
      <section className="traveler-trip-hero">
        <img src={demoTrip.image} alt="Traditional streets in Kyoto, Japan" />
        <div className="traveler-trip-overlay" />

        <div className="traveler-trip-info">
          <span className="traveler-trip-badge">DEMO TRIP</span>
          <h1>{demoTrip.title}</h1>

          <div className="traveler-trip-meta">
            <span><FiMapPin /> {demoTrip.location}</span>
            <span><FiCalendar /> {demoTrip.date}</span>
          </div>
        </div>

        <Link to="/trips" className="traveler-hero-link">
          Explore trips <FiArrowUpRight />
        </Link>
      </section>

      <section className="traveler-stat-grid">
        <article className="traveler-stat-card">
          <span className="traveler-stat-icon"><FiBriefcase /></span>
          <div>
            <strong>0</strong>
            <span>Confirmed trips</span>
          </div>
        </article>

        <article className="traveler-stat-card">
          <span className="traveler-stat-icon"><FiFileText /></span>
          <div>
            <strong>0/4</strong>
            <span>Documents ready</span>
          </div>
        </article>

        <article className="traveler-stat-card">
          <span className="traveler-stat-icon"><FiAward /></span>
          <div>
            <strong>1</strong>
            <span>Demo profile</span>
          </div>
        </article>
      </section>

      <div className="traveler-lower-grid">
        <section className="traveler-panel">
          <div className="traveler-panel-heading">
            <div>
              <h3>Latest updates</h3>
              <p>Travel reminders and information</p>
            </div>
            <Link to="/traveler/updates">See all</Link>
          </div>

          <div className="traveler-update-list">
            {updates.map((update) => (
              <article className="traveler-update-item" key={update.title}>
                <span className={`traveler-update-icon ${update.color}`}>
                  {update.icon}
                </span>
                <div className="traveler-update-content">
                  <strong>{update.title}</strong>
                  <p>{update.detail}</p>
                  <small><FiClock /> {update.time}</small>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="traveler-panel">
          <div className="traveler-panel-heading">
            <div>
              <h3>Documents</h3>
              <p>Example document checklist</p>
            </div>
            <Link to="/traveler/documents">Manage</Link>
          </div>

          <div className="traveler-document-list">
            {documents.map((document) => (
              <div className="traveler-document-item" key={document.name}>
                <span className="traveler-document-name">
                  <FiFileText /> {document.name}
                </span>
                <span className={`traveler-document-status ${document.type}`}>
                  {document.status}
                </span>
              </div>
            ))}
          </div>

          <p className="traveler-demo-note">
            Demo checklist only. No real documents have been verified or stored.
          </p>
        </section>
      </div>

      <section className="traveler-panel traveler-next-step">
        <div>
          <span className="traveler-section-eyebrow">YOUR NEXT JOURNEY</span>
          <h3>Ready for your next adventure?</h3>
          <p>Explore destinations and start planning your next trip.</p>
        </div>
        <Link to="/trips" className="traveler-primary-button">
          Browse trips <FiArrowUpRight />
        </Link>
      </section>
    </main>
  );
}
