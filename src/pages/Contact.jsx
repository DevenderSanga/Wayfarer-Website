
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiArrowRight,
  FiSend,
  FiCompass,
  FiMessageCircle,
  FiHelpCircle
} from "react-icons/fi";

import "../styles/Contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "General enquiry",
    message: ""
  });

  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
    setError("");
  }

  function handleSubmit(e) {
    e.preventDefault();

    const subject = encodeURIComponent(form.subject);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );

    window.location.href =
      `mailto:hello@wayfarer.travel?subject=${subject}&body=${body}`;
  }

  const faqs = [
    {
      question: "How can I book a trip?",
      answer: "Explore our trips, select your adventure, and follow the booking process."
    },
    {
      question: "Can I cancel my booking?",
      answer: "Our standard booking policy offers free cancellation up to 30 days before the trip."
    },
    {
      question: "Do you organize group adventures?",
      answer: "Yes! We organize small-group adventures with a maximum of 14 travelers."
    },
    {
      question: "How can I get booking support?",
      answer: "Email our support team at hello@wayfarer.travel or call +351 21 000 0000."
    }
  ];

  return (
    <main className="contact-page">

      {/* Hero */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <span className="contact-eyebrow">
            <FiCompass /> WE'RE HERE FOR YOU
          </span>

          <h1>
            Every great journey
            <br />
            starts with a <span>hello.</span>
          </h1>

          <p>
            Have a question, need travel advice, or ready to plan
            your next adventure? We'd love to hear from you.
          </p>

          <a href="#contact-form" className="contact-hero-button">
            Get in touch <FiArrowRight />
          </a>
        </div>
      </section>

      {/* Contact Information */}
      <section className="contact-info-section">
        <div className="contact-section-heading">
          <span>LET'S CONNECT</span>
          <h2>We'd love to hear from you</h2>
          <p>
            Our team is here to make your travel experience
            smooth, memorable, and stress-free.
          </p>
        </div>

        <div className="contact-info-grid">

          <a href="mailto:hello@wayfarer.travel" className="contact-info-card">
            <div className="contact-info-icon"><FiMail /></div>
            <h3>Email us</h3>
            <p>Have a question? Send us an email.</p>
            <strong>hello@wayfarer.travel</strong>
            <FiArrowRight className="contact-card-arrow" />
          </a>

          <a href="tel:+351210000000" className="contact-info-card">
            <div className="contact-info-icon"><FiPhone /></div>
            <h3>Call our team</h3>
            <p>Talk to our travel support team.</p>
            <strong>+351 21 000 0000</strong>
            <FiArrowRight className="contact-card-arrow" />
          </a>

          <div className="contact-info-card">
            <div className="contact-info-icon"><FiMapPin /></div>
            <h3>Visit us</h3>
            <p>Our company base is located in</p>
            <strong>Lisbon, Portugal</strong>
            <FiArrowRight className="contact-card-arrow" />
          </div>

        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section" id="contact-form">

        <div className="contact-form-intro">
          <span className="contact-section-label">SEND US A MESSAGE</span>

          <h2>
            Let's plan something
            <span> unforgettable.</span>
          </h2>

          <p>
            Tell us what you're looking for. Whether it's a booking
            question or a dream destination, we're ready to help.
          </p>

          <div className="contact-support-note">
            <div className="contact-support-icon">
              <FiMessageCircle />
            </div>
            <div>
              <strong>Friendly human support</strong>
              <p>We're happy to help with your travel questions.</p>
            </div>
          </div>

          <div className="contact-working-hours">
            <FiClock />
            <div>
              <strong>Business timezone</strong>
              <span>WET · Lisbon</span>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Send us a message</h3>
          <p>Fill in the details below and we'll be happy to help.</p>

          <div className="contact-input-row">
            <label>
              Your name
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Email address
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <label>
            Subject
            <select
              name="subject"
              value={form.subject}
              onChange={handleChange}
            >
              <option>General enquiry</option>
              <option>Trip information</option>
              <option>Booking assistance</option>
              <option>Cancellation request</option>
              <option>Partnership enquiry</option>
            </select>
          </label>

          <label>
            Your message
            <textarea
              name="message"
              rows="5"
              placeholder="Tell us how we can help you..."
              value={form.message}
              onChange={handleChange}
              required
            />
          </label>

          {error && <p className="contact-form-error">{error}</p>}

          <button type="submit" className="contact-submit-button">
            Send message <FiSend />
          </button>

          <small>
            Your email application will open with your message prepared.
          </small>
        </form>

      </section>

      {/* Office */}
      <section className="contact-office-section">
        <div className="contact-office-content">
          <span className="contact-section-label">OUR HOME BASE</span>
          <h2>Greetings from Lisbon.</h2>
          <p>
            Wayfarer Travel Co. is based in Lisbon, Portugal.
            Our team helps travelers discover meaningful adventures
            and unforgettable destinations.
          </p>

          <div className="contact-office-detail">
            <FiMapPin />
            <span>Lisbon, Portugal</span>
          </div>

          <div className="contact-office-detail">
            <FiClock />
            <span>WET · Lisbon</span>
          </div>
        </div>

        <div className="contact-office-visual">
          <img
            src="https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1100&q=85"
            alt="Beautiful streets of Lisbon, Portugal"
          />
          <div className="contact-office-overlay">
            <FiMapPin />
            <div>
              <strong>Wayfarer Travel Co.</strong>
              <span>Lisbon, Portugal</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="contact-faq-section">
        <div className="contact-section-heading">
          <span><FiHelpCircle /> NEED SOME HELP?</span>
          <h2>Frequently asked questions</h2>
          <p>Quick answers to some common travel questions.</p>
        </div>

        <div className="contact-faq-grid">
          {faqs.map((faq, index) => (
            <details className="contact-faq-item" key={index}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="contact-bottom-cta">
        <div>
          <span>YOUR NEXT ADVENTURE AWAITS</span>
          <h2>Ready to go somewhere?</h2>
          <p>Discover your next unforgettable experience with Wayfarer.</p>
        </div>

        <Link to="/trips">
          Explore our trips <FiArrowRight />
        </Link>
      </section>

    </main>
  );
}
