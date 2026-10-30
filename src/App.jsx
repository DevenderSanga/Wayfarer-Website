
import { Routes, Route } from "react-router-dom";

// Shared components
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import AdminLayout from "./components/AdminLayout.jsx";
import TravelerLayout from "./components/TravelerLayout.jsx";

// Public pages
import Home from "./pages/Home.jsx";
import Trips from "./pages/Trips.jsx";
import TripDetails from "./pages/TripDetails.jsx";
import Booking from "./pages/Booking.jsx";
import Confirmation from "./pages/Confirmation.jsx";
import NotFound from "./pages/NotFound.jsx";
import Contact from "./pages/Contact.jsx";
import Services from "./pages/Services.jsx";
import About from "./pages/About.jsx";

// Admin pages
import Dashboard from "./pages/admin/Dashboard.jsx";
import ManageTrips from "./pages/admin/ManageTrips.jsx";
import ManageBookings from "./pages/admin/ManageBookings.jsx";
import Reports from "./pages/admin/Reports.jsx";
import Travelers from "./pages/admin/Travelers.jsx";
import Settings from "./pages/admin/Settings.jsx";

// Traveler pages
import TravelerDashboard from "./pages/traveler/TravelerDashboard.jsx";
import TravelerSection from "./pages/traveler/TravelerSection.jsx";

function PublicLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      {/* PUBLIC WEBSITE */}

      <Route
        path="/"
        element={
          <PublicLayout>
            <Home />
          </PublicLayout>
        }
      />
      <Route
        path="/contact"
        element={
          <PublicLayout>
            <Contact />
          </PublicLayout>
        }
      />
      <Route
        path="/services"
        element={
          <PublicLayout>
            <Services />
          </PublicLayout>
        }
      />
      <Route
        path="/about"
        element={
          <PublicLayout>
            <About />
          </PublicLayout>
        }
      />

      <Route
        path="/trips"
        element={
          <PublicLayout>
            <Trips />
          </PublicLayout>
        }
      />

      <Route
        path="/trips/:id"
        element={
          <PublicLayout>
            <TripDetails />
          </PublicLayout>
        }
      />

      <Route
        path="/booking/:tripId"
        element={
          <PublicLayout>
            <Booking />
          </PublicLayout>
        }
      />

      <Route
        path="/booking-confirmation"
        element={
          <PublicLayout>
            <Confirmation />
          </PublicLayout>
        }
      />

      {/* ADMIN DASHBOARD */}

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="trips" element={<ManageTrips />} />
        <Route path="bookings" element={<ManageBookings />} />
        <Route path="reports" element={<Reports />} />
        <Route path="travelers" element={<Travelers />} />
        <Route path="settings" element={<Settings />} />
      </Route>

      {/* TRAVELER DASHBOARD */}

      <Route path="/traveler" element={<TravelerLayout />}>
        <Route index element={<TravelerDashboard />} />
        <Route path="dashboard" element={<TravelerDashboard />} />
        <Route path="trips" element={<TravelerSection />} />
        <Route path="itinerary" element={<TravelerSection />} />
        <Route path="documents" element={<TravelerSection />} />
        <Route path="updates" element={<TravelerSection />} />
        <Route path="profile" element={<TravelerSection />} />
      </Route>

      {/* PAGE NOT FOUND */}

      <Route
        path="*"
        element={
          <PublicLayout>
            <NotFound />
          </PublicLayout>
        }
      />
    </Routes>
  );
}
