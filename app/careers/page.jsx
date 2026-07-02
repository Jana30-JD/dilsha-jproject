"use client";

import { useState } from "react";
import styles from "../careers/page.module.css";

export default function Careers() {
  const [search, setSearch] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("");

  const domains = [
    "Java",
    "Python",
    "React JS",
    "UI / UX",
    "DevOps",
    "Testing",
    "Cyber Security",
    "Data Analyst",
  ];

  const jobs = [
    {
      title: "Java Developer",
      description:
        "Develop enterprise applications using Java, Spring Boot and REST APIs.",
      location: "Vizag",
      salary: "5-7 LPA",
    },
    {
      title: "Python Developer",
      description:
        "Build scalable backend services, automation scripts and AI solutions.",
      location: "Vizag",
      salary: "5-8 LPA",
    },
    {
      title: "Frontend Developer",
      description:
        "Create responsive websites using HTML, CSS, JavaScript and React.",
      location: "Hybrid",
      salary: "4-6 LPA",
    },
  ];

  const benefits = [
    {
      title: "Learning",
      description: "Continuous technical training and mentorship.",
    },
    {
      title: "Innovation",
      description: "Work on AI, Cloud, Mobile and Enterprise projects.",
    },
    {
      title: "Career Growth",
      description:
        "Fast career progression with leadership opportunities.",
    },
    {
      title: "Friendly Culture",
      description:
        "Collaborative workplace with flexible environment.",
    },
  ];
 
  const handleDomainClick = () => {
    setSelectedDomain(search);
  }
  // Search Filter
  const filteredJobs = jobs.filter((job) =>
    `${job.title} ${job.description} ${job.location}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <h1>
          Build Your <span>Career</span> With Us
        </h1>

        <p>
          Join Dilshaj Infotech and work on innovative software,
          AI, cloud, mobile and web technologies that impact businesses worldwide.
        </p>

        <div className={styles.search}>
          <input
            type="text"
            placeholder="Search Jobs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            required
            className={styles.search1}
          />

          <button onClick={handleDomainClick}>Find Jobs</button>
        </div>
      </section>

      {/* Career Domains */}
      <section className={styles.category}>
        <h2>Career Domains</h2>

        <div className={styles.grid}>
          {domains.map((domain) => (
            <div key={domain} className={styles.box}>
              {domain}
            </div>
          ))}
        </div>
      </section>

      {/* Open Positions */}
      <section className={styles.jobs}>
        <h2>Open Positions</h2>

        <div className={styles.jobGrid}>
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div key={job.title} className={styles.card}>
                <h3>{job.title}</h3>

                <p>{job.description}</p>

                <div className={styles.info}>
                  <span>📍 {job.location}</span>
                  <span>{job.salary}</span>
                </div>

             <a href="https://in.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <button className={styles.apply}>Apply Now</button>
              </a>
              </div>
            ))
          ) : (
            <h2 style={{ textAlign: "center", width: "100%" }}>
              No Jobs Found
            </h2>
          )}
        </div>
      </section>

      {/* Benefits */}
      <section className={styles.benefits}>
        <h2>Why Join Dilshaj Infotech?</h2>

        <div className={styles.benefitGrid}>
          {benefits.map((benefit) => (
            <div key={benefit.title} className={styles.item}>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>Ready To Start Your Journey?</h2>

        <p>Become a part of our growing technology family.</p>

        <button>Apply Today</button>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        © 2026 Dilshaj Infotech. All Rights Reserved.
      </footer>
    </>
  );
}