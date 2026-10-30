import { Link } from "react-router-dom";
import { FiCheckCircle, FiArrowRight } from "react-icons/fi";
import { money } from "../data/trips.js";
export default function Confirmation() {
  let booking = null; try { booking=JSON.parse(localStorage.getItem("lastWayfarerBooking")); } catch {}
  return <main className="confirmation-page"><div className="confirmation-card"><div className="success-icon"><FiCheckCircle/></div><div className="eyebrow"><span></span> REQUEST RECEIVED</div><h1>Adventure looks<br/><em>good on you.</em></h1><p>Your booking request has been saved in this browser. This is a demo confirmation — no payment was taken.</p>{booking&&<div className="confirmation-details"><div><span>Reference</span><strong>{booking.id}</strong></div><div><span>Trip</span><strong>{booking.tripTitle}</strong></div><div><span>Travel date</span><strong>{booking.date}</strong></div><div><span>Estimated total</span><strong>{money(booking.total)}</strong></div></div>}<Link to="/trips" className="button button-dark">Keep exploring <FiArrowRight/></Link></div></main>;
}