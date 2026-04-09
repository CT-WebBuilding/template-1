import './App.css'

const services = [
  {
    title: 'Signature Service',
    description:
      'Highlight your most popular booking with a short description that explains the result.',
  },
  {
    title: 'New Client Package',
    description:
      'Use this space for an intro offer, consultation, or first-time client experience.',
  },
  {
    title: 'Ongoing Appointments',
    description:
      'Show the repeat service that keeps your schedule full and clients coming back.',
  },
]

const steps = [
  {
    title: 'Choose a service',
    description: 'Give visitors a quick overview of what you offer and who it is for.',
  },
  {
    title: 'Pick a time',
    description: 'Make booking feel easy with a clear call to action and simple next step.',
  },
  {
    title: 'Show up confident',
    description: 'Reinforce the outcome clients can expect from working with you.',
  },
]

const testimonials = [
  {
    quote:
      'The booking process was simple, the service felt professional, and I knew exactly what to expect.',
    name: 'Client Name',
  },
  {
    quote:
      'This layout makes the business feel trustworthy right away. It is clean, clear, and easy to use.',
    name: 'Happy Customer',
  },
]

const faqs = [
  {
    question: 'How far in advance can clients book?',
    answer: 'Add your availability window here so people know when they can schedule.',
  },
  {
    question: 'Do you accept same-day appointments?',
    answer: 'Use this answer to set expectations for last-minute bookings or walk-ins.',
  },
  {
    question: 'What should a new client expect?',
    answer:
      'Share a short overview of your process so visitors feel informed before they book.',
  },
]

function App() {
  return (
    <div className="page-shell">
      <header className="site-header">
        <div>
          <p className="eyebrow">Appointment-based website template</p>
          <a className="brand" href="#top">
            Studio Name
          </a>
        </div>

        <nav className="site-nav" aria-label="Primary">
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#testimonials">Reviews</a>
          <a href="#faq">FAQ</a>
        </nav>

        <a className="button button-primary" href="#contact">
          Book now
        </a>
      </header>

      <main>
        <section className="hero section" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Designed for salons, clinics, studios, and consultants</p>
            <h1>A simple website that helps clients book with confidence.</h1>
            <p className="hero-text">
              This starter homepage is built to feel clean, trustworthy, and easy to
              customize for local businesses that rely on appointments.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                Start with this layout
              </a>
              <a className="button button-secondary" href="#services">
                View sections
              </a>
            </div>

            <ul className="trust-list" aria-label="Trust signals">
              <li>Online booking ready</li>
              <li>Mobile-friendly layout</li>
              <li>Easy to customize</li>
            </ul>
          </div>

          <aside className="hero-card" aria-label="Preview card">
            <p className="card-label">Quick preview</p>
            <h2>What this template communicates</h2>
            <ul className="check-list">
              <li>Clear services</li>
              <li>Simple booking flow</li>
              <li>Trust-building testimonials</li>
              <li>Strong final call to action</li>
            </ul>
          </aside>
        </section>

        <section className="section" id="services">
          <div className="section-heading">
            <p className="eyebrow">Services</p>
            <h2>Show your core offers without overwhelming visitors.</h2>
          </div>

          <div className="card-grid">
            {services.map((service) => (
              <article className="info-card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-alt" id="process">
          <div className="section-heading">
            <p className="eyebrow">How it works</p>
            <h2>Keep the path to booking short and easy to follow.</h2>
          </div>

          <div className="steps-grid">
            {steps.map((step, index) => (
              <article className="step-card" key={step.title}>
                <span className="step-number">0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="testimonials">
          <div className="section-heading">
            <p className="eyebrow">Testimonials</p>
            <h2>Add social proof that makes new visitors feel comfortable booking.</h2>
          </div>

          <div className="card-grid">
            {testimonials.map((testimonial) => (
              <blockquote className="info-card quote-card" key={testimonial.name}>
                <p>"{testimonial.quote}"</p>
                <cite>{testimonial.name}</cite>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="section section-alt" id="faq">
          <div className="section-heading">
            <p className="eyebrow">FAQ</p>
            <h2>Answer the questions that usually slow people down before booking.</h2>
          </div>

          <div className="faq-list">
            {faqs.map((faq) => (
              <article className="faq-item" key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <section className="contact-banner" id="contact">
        <div>
          <p className="eyebrow">Final call to action</p>
          <h2>Ready to turn this into a real client website?</h2>
          <p>
            Replace this copy with a booking link, phone number, address, and business
            details for the niche you want to target.
          </p>
        </div>

        <div className="contact-details">
          <a className="button button-primary" href="mailto:hello@example.com">
            hello@example.com
          </a>
          <p>(555) 123-4567</p>
          <p>123 Main Street, Your City</p>
        </div>
      </section>
    </div>
  )
}

export default App
