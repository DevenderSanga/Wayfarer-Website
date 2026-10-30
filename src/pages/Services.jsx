
import { Link } from "react-router-dom";
import {
  FiCompass,
  FiMap,
  FiUsers,
  FiGlobe,
  FiTruck,
  FiHeadphones,
  FiCheckCircle,
  FiArrowRight,
  FiHeart,
  FiShield,
  FiStar
} from "react-icons/fi";

import "../styles/Services.css";

const services = [
  {
    icon: <FiCompass />,
    title: "Guided Small-Group Adventures",
    description:
      "Explore incredible destinations with thoughtfully planned small-group adventures led by experienced guides.",
    tag: "Small groups · Max 14 travelers"
  },
  {
    icon: <FiMap />,
    title: "Customized Travel Experiences",
    description:
      "Discover journeys that match your travel interests, preferred destinations, pace, and personal style.",
    tag: "Experiences made around you"
  },
  {
    icon: <FiGlobe />,
    title: "Cultural & Local Experiences",
    description:
      "Connect with local communities, discover authentic traditions, taste regional food, and experience destinations beyond the usual tourist routes.",
    tag: "Travel deeper · Discover more"
  },
  {
    icon: <FiHeart />,
    title: "Adventure & Outdoor Activities",
    description:
      "Enjoy outdoor experiences, nature exploration, scenic hikes, wildlife encounters, and unforgettable adventures.",
    tag: "Adventure awaits"
  },
  {
    icon: <FiTruck />,
    title: "Accommodation & Transport",
    description:
      "Get help understanding your accommodation and transport arrangements so you can enjoy a smoother travel experience.",
    tag: "Comfort throughout your journey"
  },
  {
    icon: <FiHeadphones />,
    title: "Travel Support & Assistance",
    description:
      "Our support team is here to help with booking questions, trip information, and assistance before your adventure.",
    tag: "Here when you need us"
  }
];

const benefits = [
  {
    icon: <FiUsers />,
    title: "Small Groups",
    description: "A more personal experience with a maximum of 14 travelers."
  },
  {
    icon: <FiShield />,
    title: "Flexible Bookings",
    description: "Free cancellation within the company's 30-day cancellation window."
  },
  {
    icon: <FiStar />,
    title: "Thoughtful Experiences",
    description: "Discover carefully planned adventures and meaningful local experiences."
  }
];

export default function Services() {
  return (
    <main className="services-page">

      {/* Hero */}
      <section className="services-hero">
        <div className="services-hero-overlay"></div>

        <div className="services-hero-content">
          <span className="services-eyebrow">
            THE WAYFARER EXPERIENCE
          </span>

          <h1>
            More than a trip.
            <br />
            A journey to remember.
          </h1>

          <p>
            From small-group adventures to authentic local experiences,
            we make discovering the world more meaningful.
          </p>

          <Link to="/trips" className="services-primary-btn">
            Explore our trips <FiArrowRight />
          </Link>
        </div>
      </section>

      {/* Introduction */}
      <section className="services-intro">
        <span className="services-section-label">
          WHAT WE OFFER
        </span>

        <h2>Travel experiences designed around you</h2>

        <p>
          At Wayfarer Travel Co., we believe travel is about more than
          visiting places. It is about meeting people, discovering
          cultures, and creating memories. Our services help make
          every part of your adventure more enjoyable.
        </p>
      </section>

      {/* Services */}
      <section className="services-grid-section">
        <div className="services-grid">
          {services.map((service, index) => (
            <article className="service-card" key={index}>
              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <span className="service-tag">
                <FiCheckCircle />
                {service.tag}
              </span>
            </article>
          ))}
        </div>
      </section>

      {/* Why choose us */}
      <section className="services-benefits">
        <div className="services-benefits-heading">
          <span className="services-section-label">
            WHY WAYFARER
          </span>

          <h2>Small groups. Big experiences.</h2>

          <p>
            We focus on thoughtful travel experiences that help you
            explore comfortably, connect meaningfully, and travel
            with confidence.
          </p>
        </div>

        <div className="services-benefits-grid">
          {benefits.map((benefit, index) => (
            <article className="benefit-card" key={index}>
              <div className="benefit-icon">
                {benefit.icon}
              </div>

              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="services-process">
        <span className="services-section-label">
          YOUR JOURNEY STARTS HERE
        </span>

        <h2>Three steps to your next adventure</h2>

        <div className="process-grid">
          <article>
            <span>01</span>
            <h3>Discover</h3>
            <p>Find a destination and experience that inspires you.</p>
          </article>

          <article>
            <span>02</span>
            <h3>Book</h3>
            <p>Choose your trip, review the details, and reserve your place.</p>
          </article>

          <article>
            <span>03</span>
            <h3>Explore</h3>
            <p>Meet your group, enjoy the journey, and make lasting memories.</p>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta">
        <h2>Ready to see where the world takes you?</h2>

        <p>
          Your next unforgettable experience could be just one trip away.
        </p>

        <Link to="/trips" className="services-primary-btn">
          Find your next adventure <FiArrowRight />
        </Link>
      </section>

    </main>
  );
}
