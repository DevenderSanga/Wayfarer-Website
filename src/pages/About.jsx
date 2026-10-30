
import { Link } from "react-router-dom";

import {
  FiCompass,
  FiHeart,
  FiGlobe,
  FiUsers,
  FiShield,
  FiMapPin,
  FiArrowRight,
  FiCheckCircle
} from "react-icons/fi";

import "../styles/About.css";

const values = [
  {
    icon: <FiHeart />,
    title: "Travel with Purpose",
    description:
      "We believe travel should create meaningful memories, genuine connections, and experiences that stay with you."
  },
  {
    icon: <FiUsers />,
    title: "Small Groups, Real Connections",
    description:
      "Our adventures are designed for groups of no more than 14 travelers, making every journey more personal."
  },
  {
    icon: <FiGlobe />,
    title: "Discover Local Culture",
    description:
      "We encourage travelers to explore beyond familiar routes and connect with the people, traditions, and culture of each destination."
  },
  {
    icon: <FiShield />,
    title: "Travel with Confidence",
    description:
      "From booking information to customer assistance, we aim to make every step of your journey clear and comfortable."
  }
];

const highlights = [
  {
    number: "14",
    label: "Maximum travelers per group"
  },
  {
    number: "30 Days",
    label: "Free cancellation window"
  },
  {
    number: "4%",
    label: "Booking fee"
  },
  {
    number: "100%",
    label: "Focus on meaningful experiences"
  }
];

export default function About() {
  return (
    <main className="about-page">

      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-overlay"></div>

        <div className="about-hero-content">
          <span className="about-eyebrow">
            ABOUT WAYFARER
          </span>

          <h1>
            We believe the world
            <br />
            is meant to be explored.
          </h1>

          <p>
            We create thoughtful small-group adventures that bring
            people closer to destinations, cultures, and unforgettable
            experiences.
          </p>

          <Link to="/trips" className="about-primary-btn">
            Discover our journeys <FiArrowRight />
          </Link>
        </div>
      </section>

      {/* Our Story */}
      <section className="about-story">
        <div className="about-story-image">
          <img
            src="https://images.unsplash.com/photo-1472396961693-142e6e269027?w=1000"
            alt="Beautiful nature and wildlife landscape"
          />
        </div>

        <div className="about-story-content">
          <span className="about-section-label">
            OUR STORY
          </span>

          <h2>
            Travel is not just about where you go.
            It's about what you discover.
          </h2>

          <p>
            At Wayfarer Travel Co., we see travel as an opportunity
            to experience the world differently. Every destination
            has a story, every culture has something to teach us,
            and every journey creates an opportunity for connection.
          </p>

          <p>
            That is why we focus on guided small-group adventures
            that combine discovery, local experiences, and the joy
            of exploring together.
          </p>

          <p>
            Whether you are discovering a new culture, exploring
            nature, or meeting fellow travelers, we want your
            journey to be meaningful from beginning to end.
          </p>

          <Link to="/services" className="about-text-link">
            Explore our services <FiArrowRight />
          </Link>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="about-mission">
        <div className="about-mission-content">
          <span className="about-section-label">
            OUR PURPOSE
          </span>

          <h2>Making every journey matter.</h2>

          <p>
            Our mission is to make meaningful travel experiences
            more accessible through thoughtfully planned adventures,
            small groups, and opportunities to discover destinations
            beyond the ordinary.
          </p>
        </div>

        <div className="about-mission-image">
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1000"
            alt="Mountain adventure destination"
          />
        </div>
      </section>

      {/* Values */}
      <section className="about-values">
        <div className="about-section-heading">
          <span className="about-section-label">
            WHAT GUIDES US
          </span>

          <h2>Our values shape every adventure.</h2>

          <p>
            The principles behind the way we plan, explore,
            and experience the world.
          </p>
        </div>

        <div className="about-values-grid">
          {values.map((value, index) => (
            <article className="about-value-card" key={index}>
              <div className="about-value-icon">
                {value.icon}
              </div>

              <h3>{value.title}</h3>

              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Company Highlights */}
      <section className="about-highlights">
        <div className="about-section-heading">
          <span className="about-section-label">
            THE WAYFARER DIFFERENCE
          </span>

          <h2>Travel thoughtfully. Explore freely.</h2>
        </div>

        <div className="about-highlights-grid">
          {highlights.map((item, index) => (
            <div className="about-highlight" key={index}>
              <h3>{item.number}</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Travel Promise */}
      <section className="about-promise">
        <div className="about-promise-image">
          <img
            src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1000"
            alt="Beautiful lake surrounded by mountains"
          />
        </div>

        <div className="about-promise-content">
          <span className="about-section-label">
            OUR PROMISE
          </span>

          <h2>Every journey deserves thoughtful planning.</h2>

          <ul>
            <li>
              <FiCheckCircle />
              Small-group experiences with a maximum of 14 travelers.
            </li>

            <li>
              <FiCheckCircle />
              Clear trip information and booking details.
            </li>

            <li>
              <FiCheckCircle />
              Customer support when you need assistance.
            </li>

            <li>
              <FiCheckCircle />
              A 30-day free cancellation window under company policy.
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <span className="about-section-label">
          YOUR NEXT CHAPTER STARTS HERE
        </span>

        <h2>The world is waiting. Let's explore it.</h2>

        <p>
          Find your next adventure and make memories worth carrying home.
        </p>

        <Link to="/trips" className="about-primary-btn">
          Explore our trips <FiArrowRight />
        </Link>
      </section>

    </main>
  );
}
