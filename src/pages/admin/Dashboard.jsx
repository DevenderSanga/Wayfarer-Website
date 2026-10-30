
import {
  FiCalendar,
  FiMap,
  FiTrendingUp,
  FiUsers
} from "react-icons/fi";
import { Link } from "react-router-dom";
import { getTrips, getBookings, money } from "../../data/trips.js";

export default function Dashboard() {
  const trips = getTrips() || [];
  const bookings = getBookings() || [];

  const revenue = bookings.reduce(
    (total, booking) => total + (Number(booking.total) || 0),
    0
  );

  const upcomingTrips = trips.length;

  const travelers = new Set(
    bookings.map((booking) => booking.email).filter(Boolean)
  ).size;

  const occupancy = bookings.length
    ? Math.min(100, Math.round((bookings.length / Math.max(trips.length, 1)) * 10))
    : 0;

  const stats = [
    {
      title: "Upcoming trips",
      value: upcomingTrips,
      icon: <FiCalendar />,
      color: "green"
    },
    {
      title: "New bookings",
      value: bookings.length,
      icon: <FiTrendingUp />,
      color: "yellow"
    },
    {
      title: "Revenue (total)",
      value: money(revenue),
      icon: <FiMap />,
      color: "green"
    },
    {
      title: "Travelers",
      value: travelers,
      icon: <FiUsers />,
      color: "orange"
    }
  ];

  return (
    <div className="way-page">
      {/* <div className="way-page-heading">
        <div>
          <span className="way-eyebrow">TRAVEL OPERATIONS</span>
          <h1>Overview</h1>
          <p>Here's what's happening across your travel workspace.</p>
        </div>

        <Link to="/trips" className="way-primary-button">
          + New bookin
        </Link>
      </div> */}

      <section className="way-stats-grid">
        {stats.map((stat) => (
          <article className="way-stat-card" key={stat.title}>
            <div className="way-stat-top">
              <span>{stat.title}</span>
              <span className={`way-stat-icon ${stat.color}`}>
                {stat.icon}
              </span>
            </div>
            <strong>{stat.value}</strong>
          </article>
        ))}
      </section>

      <section className="way-panel">
        <div className="way-panel-heading">
          <div>
            <h3>Recent bookings</h3>
            <p>Latest booking requests saved by your application.</p>
          </div>
          <Link to="/admin/bookings" className="way-view-link">
            View all →
          </Link>
        </div>

        {bookings.length > 0 ? (
          <div className="way-table-scroll">
            <table className="way-table">
              <thead>
                <tr>
                  <th>REFERENCE</th>
                  <th>TRAVELER</th>
                  <th>TRIP</th>
                  <th>TRAVEL DATE</th>
                  <th>PAX</th>
                  <th>STATUS</th>
                  <th>TOTAL</th>
                </tr>
              </thead>
              <tbody>
                {bookings.slice(0, 8).map((booking, index) => (
                  <tr key={booking.id || index}>
                    <td className="way-reference">
                      {booking.id || `WF-${index + 1}`}
                    </td>
                    <td>
                      <strong>{booking.customer || "Guest"}</strong>
                      {booking.email && <small>{booking.email}</small>}
                    </td>
                    <td>{booking.tripTitle || "Trip booking"}</td>
                    <td>{booking.date || "Not specified"}</td>
                    <td>{booking.travelers || booking.pax || 1}</td>
                    <td>
                      <span
                        className={`way-status ${(booking.status || "pending").toLowerCase()}`}
                      >
                        {booking.status || "Pending"}
                      </span>
                    </td>
                    <td>{money(Number(booking.total) || 0)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="way-empty">
            <FiCalendar />
            <h3>No bookings yet</h3>
            <p>When a traveler makes a booking, it will appear here.</p>
            <Link to="/trips" className="way-view-link">
              Explore trips →
            </Link>
          </div>
        )}
      </section>

      <section className="way-quick-links">
        <Link to="/admin/trips" className="way-quick-card">
          <FiMap />
          <div>
            <strong>Manage trips</strong>
            <p>Add, edit, and review your trip listings.</p>
          </div>
        </Link>

        <Link to="/admin/reports" className="way-quick-card">
          <FiTrendingUp />
          <div>
            <strong>View reports</strong>
            <p>Review booking and revenue totals.</p>
          </div>
        </Link>

        <Link to="/admin/travelers" className="way-quick-card">
          <FiUsers />
          <div>
            <strong>Travelers</strong>
            <p>Review traveler details from bookings.</p>
          </div>
        </Link>
      </section>
    </div>
  );
}
