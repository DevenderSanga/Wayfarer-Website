import { Link } from "react-router-dom";
import { FiMapPin, FiStar, FiClock, FiArrowUpRight } from "react-icons/fi";
import { money } from "../data/trips.js";
export default function TripCard({ trip }) {
  return <article className="trip-card"><Link to={`/trips/${trip.id}`} className="trip-image-link"><img className="trip-image" src={trip.image} alt={trip.title} /><span className="image-tag">{trip.category}</span><span className="image-arrow"><FiArrowUpRight /></span></Link><div className="trip-card-body"><div className="trip-location"><FiMapPin /> {trip.location}<span className="rating"><FiStar /> {trip.rating || "4.8"}</span></div><Link to={`/trips/${trip.id}`} className="trip-title">{trip.title}</Link><div className="trip-card-bottom"><span className="duration"><FiClock /> {trip.duration}</span><span className="trip-price">{money(trip.price)} <small>/ person</small></span></div></div></article>;
}