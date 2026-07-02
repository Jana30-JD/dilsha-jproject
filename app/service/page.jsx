import styles from "../service/style.module.css";

export default function Services() {
  return (
    <>
      <section className={styles.services}>
        <h1 className={styles.title}>Our Services</h1>

        <div className={styles.container}>
          <div className={styles.card}>
            <h2>🤖 AI & Machine Learning</h2>
            <p>
              AI Chatbots <br />
              Predictive Analytics <br />
              Automation Solutions <br />
              Deep Learning
            </p>
          </div>

          <div className={styles.card}>
            <h2>💻 Web Development</h2>
            <p>
              Responsive Websites <br />
              React Applications <br />
              Spring Boot APIs <br />
              E-Commerce
            </p>
          </div>

          <div className={styles.card}>
            <h2>📱 Mobile Apps</h2>
            <p>
              Android Apps <br />
              iOS Apps <br />
              Flutter Apps <br />
              Hybrid Development
            </p>
          </div>

          <div className={styles.card}>
            <h2>🎨 UI / UX Design</h2>
            <p>
              Wireframes <br />
              Figma Design <br />
              Interactive UI <br />
              User Experience
            </p>
          </div>

          <div className={styles.card}>
            <h2>☁ Cloud Solutions</h2>
            <p>
              AWS <br />
              Azure <br />
              Cloud Migration <br />
              DevOps
            </p>
          </div>

          <div className={styles.card}>
            <h2>🔒 Cyber Security</h2>
            <p>
              Security Testing <br />
              Data Protection <br />
              Network Security <br />
              Monitoring
            </p>
          </div>
        </div>
      </section>

      <section className={styles.process}>
        <h1 className={styles.title}>Our Process</h1>

        <div className={styles.steps}>
          {["Research", "Planning", "Design", "Development", "Testing", "Launch"].map(
            (step, index) => (
              <div className={styles.step} key={index}>
                <div className={styles.circle}>{index + 1}</div>
                <h3>{step}</h3>
              </div>
            )
          )}
        </div>
      </section>

      <section className={styles.tech}>
        <h1 className={styles.title}>Technology Stack</h1>

        <div className={styles.techBox}>
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Java",
            "Spring Boot",
            "MySQL",
            "Python",
            "AWS",
            "Docker",
          ].map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <h2>Let's Build Your Next Project</h2>

        <p>We create scalable digital solutions for your business.</p>

        <button>Contact Us</button>
      </section>

      <footer className={styles.footer}>
        © 2026 Dilshaj Infotech. All Rights Reserved.
      </footer>
    </>
  );
}