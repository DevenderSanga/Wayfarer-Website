
import { getBookings } from "../../data/trips.js";

export default function Travelers() {
  const bookings = getBookings() || [];

  const travelers = Array.from(
    new Map(
      bookings.map((booking, index) => {
        const key = booking.email || booking.customer || booking.id || index;

        return [
          key,
          {
            name: booking.customer || "Guest",
            email: booking.email || "No email provided",
            bookings: bookings.filter(
              (item) =>
                item.email && item.email === booking.email
            ).length || 1,
            latestTrip: booking.tripTitle || "Trip booking"
          }
        ];
      })
    ).values()
  );

  return (
    <div className="way-page">
      <div className="way-page-heading">
        <div>
          <span className="way-eyebrow">CUSTOMER DIRECTORY</span>
          <h1>Travelers</h1>
          <p>Traveler details collected from your booking records.</p>
        </div>
      </div>

      <section className="way-stats-grid">
        <article className="way-stat-card">
          <div className="way-stat-top"><span>Unique travelers</span></div>
          <strong>{travelers.length}</strong>
        </article>
        <article className="way-stat-card">
          <div className="way-stat-top"><span>Total bookings</span></div>
          <strong>{bookings.length}</strong>
        </article>
      </section>

      <section className="way-panel">
        <div className="way-panel-heading">
          <div>
            <h3>Traveler directory</h3>
            <p>Information available in your current booking data.</p>
          </div>
        </div>

        {travelers.length ? (
          <div className="way-table-scroll">
            <table className="way-table">
              <thead>
                <tr>
                  <th>TRAVELER</th>
                  <th>EMAIL</th>
                  <th>BOOKINGS</th>
                  <th>TRIP</th>
                </tr>
              </thead>
              <tbody>
                {travelers.map((traveler, index) => (
                  <tr key={`${traveler.email}-${index}`}>
                    <td><strong>{traveler.name}</strong></td>
                    <td>{traveler.email}</td>
                    <td>{traveler.bookings}</td>
                    <td>{traveler.latestTrip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="way-empty">
            <h3>No travelers yet</h3>
            <p>Traveler details will appear after bookings are created.</p>
          </div>
        )}
      </section>
    </div>
  );
}
