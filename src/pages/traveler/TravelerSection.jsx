
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../styles/TravelerDashboard.css";
import {
  FiMapPin,
  FiCalendar,
  FiClock,
  FiCheckCircle,
  FiFileText,
  FiDownload,
  FiBell,
  FiUser,
  FiMail,
  FiPhone,
  FiSave,
  FiArrowUpRight,
  FiCheck,
  FiCompass
} from "react-icons/fi";

const initialProfile = {
  name: "Jordan Rivera",
  email: "jordan@example.com",
  phone: "",
  country: "India",
  emergencyContact: ""
};

const initialDocuments = [
  { id: 1, name: "Passport", status: "Ready" },
  { id: 2, name: "Travel insurance", status: "In review" },
  { id: 3, name: "Trip confirmation", status: "Ready" },
  { id: 4, name: "Flight details", status: "Pending" }
];

const initialUpdates = [
  {
    id: 1,
    title: "Your trip overview is ready",
    description: "Review your trip details and itinerary before departure.",
    date: "Recently",
    read: false
  },
  {
    id: 2,
    title: "Check your travel documents",
    description: "Review the document checklist in your traveler dashboard.",
    date: "Recently",
    read: false
  },
  {
    id: 3,
    title: "Welcome to Wayfarer",
    description: "Your traveler workspace is ready to explore.",
    date: "Recently",
    read: true
  }
];

const demoTrip = {
  id: "WF-KYOTO-01",
  title: "Temples & Tea of Kyoto",
  location: "Kyoto, Japan",
  date: "September 14, 2026",
  status: "Demo trip",
  image:
    "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=900&q=80"
};

function readStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function SectionHeader({ eyebrow, title, description, children }) {
  return (
    <div className="traveler-section-header">
      <div>
        <span className="traveler-section-eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      {children}
    </div>
  );
}

function EmptyState({ title, description }) {
  return (
    <div className="traveler-empty-state">
      <span><FiCompass /></span>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to="/trips" className="traveler-primary-button">
        Explore trips <FiArrowUpRight />
      </Link>
    </div>
  );
}

export default function TravelerSection() {
  const { pathname } = useLocation();

  const [profile, setProfile] = useState(() =>
    readStorage("wayfarerTravelerProfile", initialProfile)
  );

  const [documents, setDocuments] = useState(() =>
    readStorage("wayfarerTravelerDocuments", initialDocuments)
  );

  const [updates, setUpdates] = useState(() =>
    readStorage("wayfarerTravelerUpdates", initialUpdates)
  );

  const [savedMessage, setSavedMessage] = useState("");

  useEffect(() => {
    localStorage.setItem(
      "wayfarerTravelerProfile",
      JSON.stringify(profile)
    );
  }, [profile]);

  useEffect(() => {
    localStorage.setItem(
      "wayfarerTravelerDocuments",
      JSON.stringify(documents)
    );
  }, [documents]);

  useEffect(() => {
    localStorage.setItem(
      "wayfarerTravelerUpdates",
      JSON.stringify(updates)
    );
  }, [updates]);

  useEffect(() => {
    setSavedMessage("");
  }, [pathname]);

  function updateProfile(event) {
    event.preventDefault();
    localStorage.setItem(
      "wayfarerTravelerProfile",
      JSON.stringify(profile)
    );
    setSavedMessage("Profile saved in this browser.");
  }

  function toggleDocument(id) {
    setDocuments((current) =>
      current.map((document) => {
        if (document.id !== id) return document;

        return {
          ...document,
          status: document.status === "Ready" ? "Pending" : "Ready"
        };
      })
    );
  }

  function markAllRead() {
    setUpdates((current) =>
      current.map((update) => ({ ...update, read: true }))
    );
  }

  function markRead(id) {
    setUpdates((current) =>
      current.map((update) =>
        update.id === id ? { ...update, read: true } : update
      )
    );
  }

  const readyDocuments = documents.filter(
    (document) => document.status === "Ready"
  ).length;

  const unreadUpdates = updates.filter((update) => !update.read).length;

  // MY TRIPS
  if (pathname === "/traveler/trips") {
    return (
      <div className="traveler-section-page">
        <SectionHeader
          eyebrow="YOUR JOURNEYS"
          title="My trips"
          description="Review your travel plans and trip information."
        >
          <Link to="/trips" className="traveler-primary-button">
            Explore trips <FiArrowUpRight />
          </Link>
        </SectionHeader>

        <div className="traveler-section-summary">
          <article><strong>1</strong><span>Demo trip</span></article>
          <article><strong>0</strong><span>Verified bookings</span></article>
          <article><strong>1</strong><span>Example itinerary</span></article>
        </div>

        <section className="traveler-panel traveler-trip-list-panel">
          <div className="traveler-panel-heading">
            <div>
              <h3>Your trip list</h3>
              <p>Sample information for the dashboard preview</p>
            </div>
            <span className="traveler-pill">Demo</span>
          </div>

          <article className="traveler-trip-list-item">
            <img src={demoTrip.image} alt="Kyoto, Japan" />
            <div className="traveler-trip-list-info">
              <span className="traveler-section-eyebrow">
                {demoTrip.status}
              </span>
              <h3>{demoTrip.title}</h3>
              <p><FiMapPin /> {demoTrip.location}</p>
              <p><FiCalendar /> {demoTrip.date}</p>
              <div className="traveler-inline-actions">
                <Link to="/traveler/itinerary">View itinerary</Link>
                <Link to="/traveler/documents">View documents</Link>
              </div>
            </div>
          </article>

          <p className="traveler-demo-note">
            This is sample dashboard content, not a confirmed customer booking.
          </p>
        </section>

        <EmptyState
          title="Planning another adventure?"
          description="Explore the available trips on the public Wayfarer website."
        />
      </div>
    );
  }

  // ITINERARY
  if (pathname === "/traveler/itinerary") {
    const itinerary = [
      {
        day: "DAY 01",
        date: "September 14",
        title: "Arrive in Kyoto",
        detail: "Arrival, check-in, and explore the surrounding neighborhood."
      },
      {
        day: "DAY 02",
        date: "September 15",
        title: "Temples and gardens",
        detail: "A sample day for exploring Kyoto's historic landmarks."
      },
      {
        day: "DAY 03",
        date: "September 16",
        title: "Tea and local culture",
        detail: "A sample cultural activity and time to explore local streets."
      }
    ];

    return (
      <div className="traveler-section-page">
        <SectionHeader
          eyebrow="PLAN YOUR DAYS"
          title="Itinerary"
          description="A day-by-day view of your sample Kyoto trip."
        >
          <span className="traveler-pill">Sample itinerary</span>
        </SectionHeader>

        <section className="traveler-panel">
          <div className="traveler-panel-heading">
            <div>
              <h3>{demoTrip.title}</h3>
              <p><FiMapPin /> {demoTrip.location}</p>
            </div>
            <FiCalendar />
          </div>

          <div className="traveler-itinerary-list">
            {itinerary.map((item) => (
              <article className="traveler-itinerary-item" key={item.day}>
                <div className="traveler-itinerary-marker">
                  <FiCheckCircle />
                </div>
                <div className="traveler-itinerary-content">
                  <span className="traveler-section-eyebrow">
                    {item.day} · {item.date}
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                  <small><FiClock /> Schedule to be confirmed</small>
                </div>
              </article>
            ))}
          </div>

          <p className="traveler-demo-note">
            These activities and dates are examples. They are not a confirmed
            tour schedule.
          </p>
        </section>
      </div>
    );
  }

  // DOCUMENTS
  if (pathname === "/traveler/documents") {
    return (
      <div className="traveler-section-page">
        <SectionHeader
          eyebrow="TRAVEL PREPARATION"
          title="Documents"
          description="Track the readiness of your travel checklist."
        >
          <span className="traveler-pill">
            {readyDocuments}/{documents.length} ready
          </span>
        </SectionHeader>

        <section className="traveler-panel">
          <div className="traveler-panel-heading">
            <div>
              <h3>Document checklist</h3>
              <p>Update sample checklist statuses below</p>
            </div>
            <FiFileText />
          </div>

          <div className="traveler-document-list">
            {documents.map((document) => (
              <article className="traveler-document-item" key={document.id}>
                <span className="traveler-document-name">
                  <FiFileText />
                  {document.name}
                </span>

                <div className="traveler-document-actions">
                  <span
                    className={`traveler-document-status ${
                      document.status === "Ready" ? "verified" : "pending"
                    }`}
                  >
                    {document.status}
                  </span>

                  <button
                    type="button"
                    className="traveler-secondary-button"
                    onClick={() => toggleDocument(document.id)}
                  >
                    {document.status === "Ready" ? "Mark pending" : "Mark ready"}
                  </button>
                </div>
              </article>
            ))}
          </div>

          <p className="traveler-demo-note">
            Status changes are saved in this browser only. This checklist does
            not upload, store, or verify passport or insurance files.
          </p>
        </section>
      </div>
    );
  }

  // UPDATES
  if (pathname === "/traveler/updates") {
    return (
      <div className="traveler-section-page">
        <SectionHeader
          eyebrow="STAY INFORMED"
          title="Updates"
          description="Review travel reminders and dashboard notifications."
        >
          {unreadUpdates > 0 && (
            <button
              type="button"
              className="traveler-primary-button"
              onClick={markAllRead}
            >
              Mark all read <FiCheck />
            </button>
          )}
        </SectionHeader>

        <section className="traveler-panel">
          <div className="traveler-panel-heading">
            <div>
              <h3>All updates</h3>
              <p>{unreadUpdates} unread demo notifications</p>
            </div>
            <FiBell />
          </div>

          <div className="traveler-update-list">
            {updates.map((update) => (
              <article
                className={`traveler-update-item ${
                  update.read ? "is-read" : "is-unread"
                }`}
                key={update.id}
              >
                <span className="traveler-update-icon green">
                  <FiBell />
                </span>

                <div>
                  <strong>{update.title}</strong>
                  <p>{update.description}</p>
                  <small>{update.date}</small>

                  {!update.read && (
                    <button
                      type="button"
                      className="traveler-text-button"
                      onClick={() => markRead(update.id)}
                    >
                      Mark as read
                    </button>
                  )}
                </div>

                {!update.read && (
                  <span className="traveler-unread-dot" title="Unread" />
                )}
              </article>
            ))}
          </div>

          {updates.length === 0 && (
            <EmptyState
              title="You're all caught up"
              description="There are no updates to show."
            />
          )}
        </section>
      </div>
    );
  }

  // PROFILE
  if (pathname === "/traveler/profile") {
    return (
      <div className="traveler-section-page">
        <SectionHeader
          eyebrow="YOUR ACCOUNT"
          title="Profile"
          description="Edit the demo traveler details stored in this browser."
        />

        <section className="traveler-panel traveler-profile-panel">
          <div className="traveler-profile-banner">
            <div className="traveler-profile-large-avatar">
              {(profile.name || "J").charAt(0).toUpperCase()}
            </div>
            <div>
              <h3>{profile.name || "Traveler"}</h3>
              <p>{profile.email}</p>
              <span className="traveler-pill">Demo profile</span>
            </div>
          </div>

          <form className="traveler-profile-form" onSubmit={updateProfile}>
            <label>
              Full name
              <span className="traveler-input-wrap">
                <FiUser />
                <input
                  value={profile.name}
                  onChange={(event) =>
                    setProfile({ ...profile, name: event.target.value })
                  }
                  required
                />
              </span>
            </label>

            <label>
              Email address
              <span className="traveler-input-wrap">
                <FiMail />
                <input
                  type="email"
                  value={profile.email}
                  onChange={(event) =>
                    setProfile({ ...profile, email: event.target.value })
                  }
                  required
                />
              </span>
            </label>

            <label>
              Phone number
              <span className="traveler-input-wrap">
                <FiPhone />
                <input
                  type="tel"
                  value={profile.phone}
                  onChange={(event) =>
                    setProfile({ ...profile, phone: event.target.value })
                  }
                  placeholder="Enter phone number"
                />
              </span>
            </label>

            <label>
              Country
              <input
                value={profile.country}
                onChange={(event) =>
                  setProfile({ ...profile, country: event.target.value })
                }
              />
            </label>

            <label className="traveler-form-full">
              Emergency contact
              <input
                value={profile.emergencyContact}
                onChange={(event) =>
                  setProfile({
                    ...profile,
                    emergencyContact: event.target.value
                  })
                }
                placeholder="Enter an emergency contact"
              />
            </label>

            <div className="traveler-form-full traveler-form-footer">
              {savedMessage && (
                <span className="traveler-save-message">
                  <FiCheckCircle /> {savedMessage}
                </span>
              )}

              <button type="submit" className="traveler-primary-button">
                <FiSave /> Save profile
              </button>
            </div>
          </form>

          <p className="traveler-demo-note">
            Profile details are stored locally in this browser, not in a secure
            online account.
          </p>
        </section>
      </div>
    );
  }

  return (
    <EmptyState
      title="Page not found"
      description="Choose a section from the traveler sidebar."
    />
  );
}
