  import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Image from "next/image";
import styles from "./footer.module.css";
import Link from "next/link";

export default function footer() {
    return(<div>
        <footer className={styles.footer}>

  <div className={styles.footerContainer}>

    {/* Company */}

    <div className={styles.footerBox}>

      <Image
        src="/company_logo.webp"
        alt="Logo"
        width={180}
        height={70}
      />

      <p>
        Dilshaj Infotech is a next-generation software company
        delivering innovative digital solutions including
        Web Development, AI Applications, Mobile Apps,
        Cloud Solutions and Enterprise Software.
      </p>

      <div className={styles.social}>

        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaLinkedinIn /></a>
        <a href="#"><FaYoutube /></a>

      </div>

    </div>

    {/* Navigation */}

    <div className={styles.footerBox}>

      <h3>Navigation</h3>

      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Services</li>
        <li>Courses</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>

    </div>

    {/* Products */}

    <div className={styles.footerBox}>

      <h3>Products</h3>

      <ul>
        <li>Eduprova</li>
        <li>Digital News</li>
        <li>Urban Clap</li>
        <li>Bike & Car Rider</li>
        <li>E-Commerce</li>
        <li>Doctor On Click</li>
        <li>Food Delivery</li>
        <li>Security App</li>
      </ul>

    </div>

    {/* Contact */}

    <div className={styles.footerBox}>

      <h3>Contact</h3>

      <div className={styles.contact}>

        <p><FaPhoneAlt /> +91 8977272783</p>

        <p><FaEnvelope /> info@company.com</p>

        <p><FaEnvelope /> careers@company.com</p>

        <p><FaMapMarkerAlt /> Visakhapatnam, Andhra Pradesh</p>

      </div>

    </div>

  </div>

  <div className={styles.bottom}>
    © 2026 Dilshaj Infotech. All Rights Reserved.
  </div>

</footer>
    </div>)
}