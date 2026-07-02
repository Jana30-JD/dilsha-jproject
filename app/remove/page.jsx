"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "../Add/Cardcontext";
import styles from "./style.module.css";

export default function Products() {
  const {
    cart,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
  } = useCart();

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>My Cart</h1>

      {cart.length === 0 ? (
        <div className={styles.empty}>
          <h2>Your Cart is Empty</h2>

          <Link href="/mainhead">
            <button className={styles.shopBtn}>
              Continue Shopping
            </button>
          </Link>
        </div>
      ) : (
        <>
          {cart.map((item) => (
            <div className={styles.card} key={item.id}>
              <Image
                src={item.image}
                alt={item.title}
                width={120}
                height={120}
              />

              <div className={styles.info}>
                <h2>{item.title}</h2>

                <p>{item.author}</p>

                <h3>₹{item.price}</h3>
              </div>

              <div className={styles.quantity}>
                <button
                  onClick={() => decreaseQuantity(item.id)}
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() => increaseQuantity(item.id)}
                >
                  +
                </button>
              </div>

              <button
                className={styles.delete}
                onClick={() => removeItem(item.id)}
              >
                Delete
              </button>
            </div>
          ))}

          <div className={styles.total}>
            <h2>Total : ₹{totalPrice}</h2>

            <Link href="/checkout">
              <button className={styles.checkout}>
                Checkout
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}