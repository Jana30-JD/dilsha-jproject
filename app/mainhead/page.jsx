"use client"
  import Image from "next/image";
  import styles from "./style.module.css";
  import Link from "next/link";
  import { useCart } from "../Add/Cardcontext";
  import { useRouter } from "next/navigation";
  

 import { useState } from "react";



  
export default function Home() {
 const { addToCart } = useCart();
 const router = useRouter();
 const products = [
  {
    id: 1,
    title: "Complete Next.js Course",
    image: "/next.png",
    price: 99,
    oldPrice: 1999,
    rating: 4.8,
    reviews: "12,540 ratings",
    author: "Naidu Academy",
  },
  {
    id: 2,
    title: "Complete CSS Course",
    image: "/next.png",
    price: 99,
    oldPrice: 1499,
    rating: 4.9,
    reviews: "9,840 ratings",
    author: "Naidu Academy",
  },
  {
    id: 3,
    title: "Complete JavaScript Course",
    image: "/next.png",
    price: 99,
    oldPrice: 2499,
    rating: 4.8,
    reviews: "16,250 ratings",
    author: "Naidu Academy",
  },
  {
    id: 4,
    title: "Complete React Course",
    image: "/next.png",
    price: 99,
    oldPrice: 2999,
    rating: 4.9,
    reviews: "18,430 ratings",
    author: "Naidu Academy",
  },
];
  return (
    <div>
    
    <div className="">
      <Image
  src="/skills.png"
  alt="Skill Image"
  width={1920}
  height={500}
  className={styles.skillImage}
  priority
/>
    </div>

   <div className={styles.content}>
  <marquee behavior="scroll" direction="left" scrollAmount="8">
    <span style={{gap:40}}>HTML &nbsp;&nbsp;&nbsp;</span>
    <span>CSS &nbsp;&nbsp;&nbsp;</span>
    <span>JavaScript &nbsp;&nbsp;&nbsp;</span>
    <span>React &nbsp;&nbsp;&nbsp;</span>
    <span>Next.js &nbsp;&nbsp;&nbsp;</span>
    <span>MySQL &nbsp;&nbsp;&nbsp;</span>
    <span>MongoDB &nbsp;&nbsp;&nbsp;</span>
    <span>Cyber Security &nbsp;&nbsp;&nbsp;</span>
     <span>React &nbsp;&nbsp;&nbsp;</span>
    <span>Next.js &nbsp;&nbsp;&nbsp;</span>
    <span>MySQL &nbsp;&nbsp;&nbsp;</span>
    <span>MongoDB &nbsp;&nbsp;&nbsp;</span>
    <span>Cyber Security &nbsp;&nbsp;&nbsp;</span>
     <span>React &nbsp;&nbsp;&nbsp;</span>
    <span>Next.js &nbsp;&nbsp;&nbsp;</span>
    <span>MySQL &nbsp;&nbsp;&nbsp;</span>
    <span>MongoDB &nbsp;&nbsp;&nbsp;</span>
    <span>Cyber Security &nbsp;&nbsp;&nbsp;</span>
     <span>React &nbsp;&nbsp;&nbsp;</span>
    <span>Next.js &nbsp;&nbsp;&nbsp;</span>
    <span>MySQL &nbsp;&nbsp;&nbsp;</span>
    <span>MongoDB &nbsp;&nbsp;&nbsp;</span>
    <span>Cyber Security &nbsp;&nbsp;&nbsp;</span>
     <span>React &nbsp;&nbsp;&nbsp;</span>
    <span>Next.js &nbsp;&nbsp;&nbsp;</span>
    <span>MySQL &nbsp;&nbsp;&nbsp;</span>
    <span>MongoDB &nbsp;&nbsp;&nbsp;</span>
    <span>Cyber Security &nbsp;&nbsp;&nbsp;</span>
     <span>React &nbsp;&nbsp;&nbsp;</span>
    <span>Next.js &nbsp;&nbsp;&nbsp;</span>
    <span>MySQL &nbsp;&nbsp;&nbsp;</span>
    <span>MongoDB &nbsp;&nbsp;&nbsp;</span>
    <span>Cyber Security &nbsp;&nbsp;&nbsp;</span>
  </marquee>
   </div>


{/* Trending Courses */}

<div className={styles.trendingSection}>
  <h1 className={styles.heading}>Trending Courses</h1>

 <div className={styles.courseGrid}>
  {products.map((item) => (
    <div className={styles.card} key={item.id}>

      <Image
        src={item.image}
        alt={item.title}
        width={500}
        height={250}
        className={styles.courseImage}
      />

      <h2>{item.title}</h2>

      <p>{item.author}</p>

      <div className={styles.rating}>
        <span className={styles.badge}>Bestseller</span>
        <span>⭐ {item.rating}</span>
        <span>{item.reviews}</span>
      </div>

      <div className={styles.price}>
        <span className={styles.newPrice}>₹{item.price}</span>
        <span className={styles.oldPrice}>₹{item.oldPrice}</span>
      </div>

      <button className={styles.buy}>
        Buy Now
      </button>

      <button
        className={styles.buy}
        style={{ marginTop: 10 }}
        onClick={() => {
          console.log("clicked");
          addToCart(item);
          router.push("/remove");
        }}
      >
        Add Item
      </button>

    </div>
  ))}
</div>
</div>

<div className={styles.footers}>
  





</div>
   
     
    </div>
  );
}

