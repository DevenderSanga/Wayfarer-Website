
import { getTrips, getBookings, money } from "../../data/trips.js";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

export default function Reports() {
  const trips = getTrips() || [];
  const bookings = getBookings() || [];

  const revenue = bookings.reduce(
    (sum, booking) => sum + (Number(booking.total) || 0),
    0
  );

  const statusCounts = [
    {
      name: "Confirmed",
      count: bookings.filter(
        (booking) => (booking.status || "").toLowerCase() === "confirmed"
      ).length
    },
    {
      name: "Pending",
      count: bookings.filter(
        (booking) => (booking.status || "pending").toLowerCase() === "pending"
      ).length
    },
    {
      name: "Cancelled",
      count: bookings.filter(
        (booking) => (booking.status || "").toLowerCase() === "cancelled"
      ).length
    }
  ];

  return (
    <div className="way-page">
      <div className="way-page-heading">
        <div>
          <span className="way-eyebrow">ANALYTICS</span>
          <h1>Reports</h1>
          <p>A summary of the trip and booking data currently saved.</p>
        </div>
      </div>

      <section className="way-stats-grid">
        <article className="way-stat-card">
          <div className="way-stat-top"><span>Total bookings</span></div>
          <strong>{bookings.length}</strong>
        </article>
        <article className="way-stat-card">
          <div className="way-stat-top"><span>Available trips</span></div>
          <strong>{trips.length}</strong>
        </article>
        <article className="way-stat-card">
          <div className="way-stat-top"><span>Total revenue</span></div>
          <strong>{money(revenue)}</strong>
        </article>
        <article className="way-stat-card">
          <div className="way-stat-top"><span>Confirmed</span></div>
          <strong>{statusCounts[0].count}</strong>
        </article>
      </section>

      <section className="way-panel">
        <div className="way-panel-heading">
          <div>
            <h3>Bookings by status</h3>
            <p>Counts calculated from your current booking records.</p>
          </div>
        </div>

        <div className="way-report-chart">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={statusCounts}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Bar dataKey="count" fill="#086451" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section className="way-panel">
        <div className="way-panel-heading">
          <div>
            <h3>Report details</h3>
            <p>These figures reflect local project data, not a live payment system.</p>
          </div>
        </div>
        <div className="way-report-summary">
          <p><span>All booking requests</span><strong>{bookings.length}</strong></p>
          <p><span>Confirmed bookings</span><strong>{statusCounts[0].count}</strong></p>
          <p><span>Pending bookings</span><strong>{statusCounts[1].count}</strong></p>
          <p><span>Cancelled bookings</span><strong>{statusCounts[2].count}</strong></p>
          <p><span>Booking value</span><strong>{money(revenue)}</strong></p>
        </div>
      </section>
    </div>
  );
}
