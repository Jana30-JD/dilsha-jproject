import Image from "next/image";
import styles from "../About/style.module.css";


export default function AboutPage() {
  return (
    <>
      
      {/* Hero */}
      <section className={styles.hero}>
        <div>
          <h1>About Dilshaj Infotech</h1>

          <p>
            We build intelligent digital products, AI-powered applications,
            modern websites and scalable enterprise solutions that transform
            ideas into successful businesses.
          </p>

          <a href="#">Explore Our Services</a>
        </div>
      </section>

      {/* About */}
      <section className={styles.about}>
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
          alt="About"
          width={500}
          height={400}
          className={styles.aboutImage}
        />

        <div className={styles.aboutText}>
          <h2>Who We Are</h2>

          <p>
            Dilshaj Infotech is a next-generation software company focused on
            Artificial Intelligence, Web Development, Mobile Applications,
            Cloud Solutions, Automation and Enterprise Software.
            <br />
            <br />
            We believe technology should solve real business problems through
            innovation, quality and long-term partnerships.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section>
        <div className={styles.title}>
          <h2>Our Core Values</h2>
          <p>Driven by Innovation, Quality & Customer Success</p>
        </div>

        <div className={styles.cards}>
          <div className={styles.card}>
            <h3>Mission</h3>
            <p>
              Deliver world-class digital solutions that empower businesses
              through innovation and technology.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Vision</h3>
            <p>
              Become one of India's leading AI and Digital Transformation
              companies.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Values</h3>
            <p>
              Innovation, Integrity, Excellence, Collaboration and Customer
              Satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section>
        <div className={styles.title}>
          <h2>Why Choose Us</h2>
          <p>We deliver reliable, scalable and future-ready solutions.</p>
        </div>

        <div className={styles.features}>
          {[
            ["AI Solutions", "Smart AI products built for modern businesses."],
            ["Web Development", "Responsive and high-performance websites."],
            ["Mobile Apps", "Android & iOS applications with great UX."],
            ["Cloud Services", "Secure cloud deployment and DevOps solutions."],
            ["UI/UX Design", "Beautiful interfaces with modern user experience."],
            ["24/7 Support", "Reliable maintenance and technical assistance."],
          ].map(([title, desc], index) => (
            <div className={styles.feature} key={index}>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section>
        <div className={styles.title}>
          <h2>Our Achievements</h2>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <h1>15+</h1>
            <p>Projects Delivered</p>
          </div>

          <div className={styles.stat}>
            <h1>8+</h1>
            <p>Happy Clients</p>
          </div>

          <div className={styles.stat}>
            <h1>98%</h1>
            <p>Client Satisfaction</p>
          </div>

          <div className={styles.stat}>
            <h1>24/7</h1>
            <p>Technical Support</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>Let's Build Something Amazing Together</h2>

        <p>
          Ready to transform your business with AI and Digital Innovation?
        </p>

        <a href="#">Contact Us</a>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        © 2026 Dilshaj Infotech. All Rights Reserved.
      </footer>
    </>
  );
}