import Image from "next/image";
import styles from "../product/style.module.css";

const products = [
  {
    title: "EduProva",
    tag: "Education",
    image: "/images/ai.jpg",
    description:
      "AI-powered learning platform for students, professionals and skill development.",
    features: [
      "Personalized Learning",
      "AI Assistance",
      "Online Certification",
    ],
  },
  {
    title: "Digital News",
    tag: "Media",
    image: "/images/news.jpg",
    description:
      "Modern digital news platform with real-time updates and AI-powered content.",
    features: [
      "Live News",
      "AI Recommendations",
      "Trending Topics",
    ],
  },
  {
    title: "Bike & Car Rider",
    tag: "Transportation",
    image: "/images/car.jpeg",
    description:
      "Smart ride booking application with GPS tracking and instant booking.",
    features: [
      "GPS Tracking",
      "Fast Booking",
      "Secure Payment",
    ],
  },
  {
    title: "E-Commerce",
    tag: "Shopping",
    image: "/images/ecommerce.jpeg",
    description:
      "Complete online shopping solution with secure payments and multi-vendor support.",
    features: [
      "Multi Vendor",
      "Payment Gateway",
      "Admin Dashboard",
    ],
  },
  {
    title: "Interior Design",
    tag: "Design",
    image: "/images/interior.webp",
    description:
      "Professional interior planning with modern 3D visualization and AI suggestions.",
    features: [
      "3D Design",
      "Space Planning",
      "Cost Estimation",
    ],
  },
  {
    title: "Security App",
    tag: "Security",
    image: "/images/security.jpg",
    description:
      "Smart security application with live monitoring and instant emergency alerts.",
    features: [
      "Live Camera",
      "Emergency Alert",
      "Face Recognition",
    ],
  },
];

export default function ProductsPage() {
  return (
    <>
      <section className={styles.hero}>
        <h1>Our Products</h1>
        <p>
          Innovative digital solutions crafted for businesses, startups,
          education, healthcare, e-commerce, transportation, and smart
          technologies.
        </p>
      </section>

      <section className={styles.products}>
        {products.map((product, index) => (
          <div className={styles.card} key={index}>
            <Image
              src="/next.png"
              alt={product.title}
              width={500}
              height={250}
              className={styles.image}
            />

            <div className={styles.content}>
              <span className={styles.tag}>{product.tag}</span>

              <h2>{product.title}</h2>

              <p>{product.description}</p>

              <ul className={styles.features}>
                {product.features.map((feature, i) => (
                  <li key={i}>✔ {feature}</li>
                ))}
              </ul>

              <a href="#" className={styles.btn}>
                Explore
              </a>
            </div>
          </div>
        ))}
      </section>

      <footer className={styles.footer}>
        <h3>Dilshaj Infotech</h3>
        <p>Empowering Businesses with Innovative Digital Products.</p>
      </footer>
    </>
  );
}