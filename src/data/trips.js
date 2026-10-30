export const starterTrips = [
  { id: "1", title: "Himalayan Hideaway", location: "Manali, India", duration: "5 days", price: 18999, category: "Mountains", rating: 4.9, image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=85", description: "Wake up to pine-scented air, mountain views, cosy cafés and winding roads through the Himalayas.", featured: true },
  { id: "2", title: "Tropical Kerala", location: "Alleppey, India", duration: "4 days", price: 14999, category: "Nature", rating: 4.8, image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=85", description: "Cruise peaceful backwaters, discover lush landscapes and slow down in beautiful Kerala.", featured: true },
  { id: "3", title: "Desert Royal Escape", location: "Jaisalmer, India", duration: "3 days", price: 11999, category: "Culture", rating: 4.7, image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=85", description: "Explore golden forts, colourful bazaars and a memorable sunset over the Thar Desert.", featured: true },
  { id: "4", title: "Coastal Bliss", location: "South Goa, India", duration: "4 days", price: 16999, category: "Beach", rating: 4.8, image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=85", description: "Find quiet beaches, fresh seafood, palm-lined roads and the easy rhythm of coastal life.", featured: false },
  { id: "5", title: "Misty Tea Trails", location: "Munnar, India", duration: "3 days", price: 9999, category: "Nature", rating: 4.6, image: "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&w=1200&q=85", description: "Walk through rolling tea gardens and misty hills on a refreshing green escape.", featured: false },
  { id: "6", title: "Island Blue", location: "Andaman Islands, India", duration: "6 days", price: 28999, category: "Beach", rating: 4.9, image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=85", description: "Swim in clear blue water, snorkel colourful reefs and explore island beaches.", featured: false }
];

export function getTrips() {
  try {
    const saved = JSON.parse(localStorage.getItem("travelTrips"));
    return Array.isArray(saved) && saved.length ? saved : starterTrips;
  } catch {
    return starterTrips;
  }
}
export function saveTrips(trips) {
  localStorage.setItem("travelTrips", JSON.stringify(trips));
}
export function getBookings() {
  try { return JSON.parse(localStorage.getItem("travelBookings")) || []; }
  catch { return []; }
}
export function saveBookings(bookings) {
  localStorage.setItem("travelBookings", JSON.stringify(bookings));
}
export const money = (value) => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(Number(value) || 0);