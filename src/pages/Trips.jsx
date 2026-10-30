import { useMemo, useState } from "react";
import TripCard from "../components/TripCard.jsx";
import { getTrips } from "../data/trips.js";
import { FiSearch } from "react-icons/fi";
export default function Trips() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const trips = getTrips();
  const categories = ["All", ...new Set(trips.map(t=>t.category).filter(Boolean))];
  const filtered = useMemo(()=>trips.filter(t => (category==="All" || t.category===category) && `${t.title} ${t.location} ${t.category}`.toLowerCase().includes(search.toLowerCase())),[trips,search,category]);
  return <main className="page-main"><section className="page-hero"><div className="eyebrow"><span></span> THE WAYFARER COLLECTION</div><h1>Find your <em>somewhere.</em></h1><p>Beautiful places. Thoughtful journeys. Pick a direction and see where it takes you.</p></section><section className="section-wrap listing-section"><div className="listing-toolbar"><div className="filter-pills">{categories.map(c=><button key={c} className={`filter-pill ${category===c?"active":""}`} onClick={()=>setCategory(c)}>{c}</button>)}</div><label className="search-box"><FiSearch/><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search destinations..." /></label></div>{filtered.length ? <div className="trip-grid">{filtered.map(t=><TripCard key={t.id} trip={t}/>)}</div> : <div className="empty-state"><h3>No trips found</h3><p>Try another destination or category.</p><button className="button button-dark" onClick={()=>{setSearch("");setCategory("All")}}>Clear filters</button></div>}</section></main>;
}