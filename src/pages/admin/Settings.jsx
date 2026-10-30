
import { useState } from "react";
import {
  FiSave,
  FiGlobe,
  FiMail,
  FiPhone,
  FiDollarSign,
  FiCalendar,
  FiUsers,
  FiBell,
  FiPlus,
  FiTrash2,
  FiCheckCircle
} from "react-icons/fi";
import "../../styles/AdminSettings.css";

const initialSettings = {
  companyName: "Wayfarer Travel Co.",
  email: "hello@wayfarer.travel",
  phone: "+351 21 000 0000",
  currency: "USD",
  timezone: "WET · Lisbon",
  cancellationWindow: 30,
  autoConfirm: true,
  depositRequired: false,
  maxGroupSize: 14,
  bookingFee: 4,
  notifications: {
    newBookings: true,
    cancellations: true,
    dailySummary: true,
    lowAvailability: true,
    marketingReports: false
  }
};

const initialTeam = [
  { initials: "MO", name: "Mara Okafor", role: "Owner" },
  { initials: "LC", name: "Liam Chen", role: "Trip manager" },
  { initials: "SR", name: "Sofia Reyes", role: "Support" },
  { initials: "DM", name: "Diego Marín", role: "Partnerships" }
];

export default function Settings() {
  const [settings, setSettings] = useState(() => {
    try {
      const saved = localStorage.getItem("wayfarerAdminSettings");
      return saved
        ? {
            ...initialSettings,
            ...JSON.parse(saved),
            notifications: {
              ...initialSettings.notifications,
              ...(JSON.parse(saved).notifications || {})
            }
          }
        : initialSettings;
    } catch {
      return initialSettings;
    }
  });

  const [team, setTeam] = useState(() => {
    try {
      const saved = localStorage.getItem("wayfarerAdminTeam");
      return saved ? JSON.parse(saved) : initialTeam;
    } catch {
      return initialTeam;
    }
  });

  const [newMember, setNewMember] = useState({
    name: "",
    role: "Trip manager"
  });

  const [message, setMessage] = useState("");

  function updateSetting(field, value) {
    setSettings((current) => ({ ...current, [field]: value }));
    setMessage("");
  }

  function updateNotification(field, checked) {
    setSettings((current) => ({
      ...current,
      notifications: {
        ...current.notifications,
        [field]: checked
      }
    }));
    setMessage("");
  }

  function saveSettings(event) {
    event.preventDefault();

    try {
      localStorage.setItem("wayfarerAdminSettings", JSON.stringify(settings));
      localStorage.setItem("wayfarerAdminTeam", JSON.stringify(team));
      setMessage("Settings saved successfully on this browser.");
    } catch {
      setMessage("Unable to save settings. Please check browser storage.");
    }
  }

  function addTeamMember(event) {
    event.preventDefault();

    const name = newMember.name.trim();
    if (!name) return;

    const initials = name
      .split(/\s+/)
      .map((part) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

    const updatedTeam = [
      ...team,
      { initials, name, role: newMember.role }
    ];

    setTeam(updatedTeam);

    try {
      localStorage.setItem("wayfarerAdminTeam", JSON.stringify(updatedTeam));
    } catch {
      setMessage("Team member added for this session, but browser storage failed.");
    }

    setNewMember({ name: "", role: "Trip manager" });
    setMessage("Team member added.");
  }

  function removeTeamMember(index) {
    const updatedTeam = team.filter((_, i) => i !== index);
    setTeam(updatedTeam);

    try {
      localStorage.setItem("wayfarerAdminTeam", JSON.stringify(updatedTeam));
      setMessage("Team member removed.");
    } catch {
      setMessage("Team updated for this session, but browser storage failed.");
    }
  }

  return (
    <div className="admin-settings-page">
      <div className="settings-page-heading">
        <div>
          <span className="settings-eyebrow">ADMINISTRATION</span>
          <h1>Settings</h1>
          <p>Manage your company, booking rules, team and notifications.</p>
        </div>

        <button
          className="settings-save-button"
          type="button"
          onClick={saveSettings}
        >
          <FiSave /> Save changes
        </button>
      </div>

      {message && (
        <div className="settings-message" role="status">
          <FiCheckCircle /> {message}
        </div>
      )}

      <form onSubmit={saveSettings}>
        <section className="settings-card">
          <div className="settings-section-heading">
            <span className="settings-section-icon"><FiGlobe /></span>
            <div>
              <h2>Company profile</h2>
              <p>Basic information about your travel company.</p>
            </div>
          </div>

          <div className="settings-form-grid">
            <label className="settings-field">
              <span>Company name</span>
              <input
                value={settings.companyName}
                onChange={(e) => updateSetting("companyName", e.target.value)}
                required
              />
            </label>

            <label className="settings-field">
              <span>Support email</span>
              <div className="settings-input-icon">
                <FiMail />
                <input
                  type="email"
                  value={settings.email}
                  onChange={(e) => updateSetting("email", e.target.value)}
                  required
                />
              </div>
            </label>

            <label className="settings-field">
              <span>Phone</span>
              <div className="settings-input-icon">
                <FiPhone />
                <input
                  value={settings.phone}
                  onChange={(e) => updateSetting("phone", e.target.value)}
                />
              </div>
            </label>

            <label className="settings-field">
              <span>Base currency</span>
              <select
                value={settings.currency}
                onChange={(e) => updateSetting("currency", e.target.value)}
              >
                <option value="USD">USD ($)</option>
                <option value="EUR">EUR (€)</option>
                <option value="GBP">GBP (£)</option>
                <option value="INR">INR (₹)</option>
              </select>
            </label>

            <label className="settings-field settings-field-full">
              <span>Timezone</span>
              <select
                value={settings.timezone}
                onChange={(e) => updateSetting("timezone", e.target.value)}
              >
                <option>WET · Lisbon</option>
                <option>CET · Paris</option>
                <option>GMT · London</option>
                <option>IST · Kolkata</option>
                <option>UTC · Coordinated Universal Time</option>
              </select>
            </label>
          </div>
        </section>

        <section className="settings-card">
          <div className="settings-section-heading">
            <span className="settings-section-icon"><FiCalendar /></span>
            <div>
              <h2>Booking settings</h2>
              <p>Configure booking confirmations, cancellation and fees.</p>
            </div>
          </div>

          <div className="settings-form-grid">
            <label className="settings-field">
              <span>Free cancellation window (days)</span>
              <input
                type="number"
                min="0"
                max="365"
                value={settings.cancellationWindow}
                onChange={(e) => updateSetting("cancellationWindow", Number(e.target.value))}
                required
              />
              <small>Number of days before the trip.</small>
            </label>

            <label className="settings-field">
              <span>Maximum group size</span>
              <input
                type="number"
                min="1"
                max="100"
                value={settings.maxGroupSize}
                onChange={(e) => updateSetting("maxGroupSize", Number(e.target.value))}
                required
              />
              <small>Maximum travelers per group.</small>
            </label>

            <label className="settings-field">
              <span>Booking fee (%)</span>
              <input
                type="number"
                min="0"
                max="100"
                step="0.1"
                value={settings.bookingFee}
                onChange={(e) => updateSetting("bookingFee", Number(e.target.value))}
                required
              />
            </label>
          </div>

          <div className="settings-toggle-list">
            <label className="settings-toggle-row">
              <span>
                <strong>Auto-confirm bookings</strong>
                <small>Automatically confirm new bookings.</small>
              </span>
              <input
                type="checkbox"
                checked={settings.autoConfirm}
                onChange={(e) => updateSetting("autoConfirm", e.target.checked)}
              />
            </label>

            <label className="settings-toggle-row">
              <span>
                <strong>Deposit required</strong>
                <small>Require a deposit when a traveler books.</small>
              </span>
              <input
                type="checkbox"
                checked={settings.depositRequired}
                onChange={(e) => updateSetting("depositRequired", e.target.checked)}
              />
            </label>
          </div>
        </section>

        <section className="settings-card">
          <div className="settings-section-heading">
            <span className="settings-section-icon"><FiBell /></span>
            <div>
              <h2>Notifications</h2>
              <p>Choose which alerts your team should receive.</p>
            </div>
          </div>

          <div className="settings-toggle-list">
            {[
              ["newBookings", "New booking alerts", "Get notified when a traveler makes a booking."],
              ["cancellations", "Cancellation alerts", "Receive an alert when a booking is cancelled."],
              ["dailySummary", "Daily summary email", "Receive a daily overview of activity."],
              ["lowAvailability", "Low availability warnings", "Get notified when a trip has few spaces left."],
              ["marketingReports", "Marketing reports", "Receive marketing and campaign reports."]
            ].map(([key, title, description]) => (
              <label className="settings-toggle-row" key={key}>
                <span>
                  <strong>{title}</strong>
                  <small>{description}</small>
                </span>
                <input
                  type="checkbox"
                  checked={Boolean(settings.notifications[key])}
                  onChange={(e) => updateNotification(key, e.target.checked)}
                />
              </label>
            ))}
          </div>
        </section>
      </form>

      <section className="settings-card">
        <div className="settings-section-heading">
          <span className="settings-section-icon"><FiUsers /></span>
          <div>
            <h2>Team</h2>
            <p>Manage the people working with Wayfarer.</p>
          </div>
        </div>

        <div className="settings-team-list">
          {team.map((member, index) => (
            <div className="settings-team-member" key={`${member.name}-${index}`}>
              <div className="settings-team-avatar">{member.initials}</div>
              <div className="settings-team-details">
                <strong>{member.name}</strong>
                <span>{member.role}</span>
              </div>
              <button
                type="button"
                className="settings-remove-member"
                onClick={() => removeTeamMember(index)}
                aria-label={`Remove ${member.name}`}
                title="Remove team member"
              >
                <FiTrash2 />
              </button>
            </div>
          ))}
        </div>

        <form className="settings-add-team-form" onSubmit={addTeamMember}>
          <label className="settings-field">
            <span>New team member</span>
            <input
              placeholder="Full name"
              value={newMember.name}
              onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
              required
            />
          </label>

          <label className="settings-field">
            <span>Role</span>
            <select
              value={newMember.role}
              onChange={(e) => setNewMember({ ...newMember, role: e.target.value })}
            >
              <option>Owner</option>
              <option>Trip manager</option>
              <option>Support</option>
              <option>Partnerships</option>
            </select>
          </label>

          <button type="submit" className="settings-add-member-button">
            <FiPlus /> Add member
          </button>
        </form>
      </section>

      <div className="settings-bottom-save">
        <span>Remember to save your company and booking changes.</span>
        <button className="settings-save-button" type="submit">
          <FiSave /> Save changes
        </button>
      </div>
    </div>
  );
}
