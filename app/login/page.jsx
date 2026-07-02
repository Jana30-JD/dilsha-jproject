"use client";

import Link from "next/link";
import styles from "../login/style.module.css";
import { useState } from "react";
import { BiShow, BiSolidHide } from "react-icons/bi";

export default function Login() {
  const [show, setShow] = useState(false);

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <h1>Dilshaj Infotech</h1>
        <h3>Welcome Back! Please login to continue.</h3>

        <form>
          <div className={styles.inputGroup}>
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Password</label>

            <div className={styles.passwordBox}>
              <input
                type={show ? "text" : "password"}
                placeholder="Enter your password"
                required
              />

              <span
                className={styles.eye}
                onClick={() => setShow(!show)}
              >
                {show ? <BiSolidHide /> : <BiShow />}
              </span>
            </div>
          </div>

          <div className={styles.options}>
            <label>
              <input type="checkbox" />
              Remember Me
            </label>

            <Link href="/forgot-password">
              Forgot Password?
            </Link>
          </div>

          <button className={styles.loginButton} type="submit">
            Login
          </button>

          <div className={styles.register}>
            Don't have an account?{" "}
            <Link href="/register">Register</Link>
          </div>
        </form>

        <footer className={styles.footer}>
          © 2026 Dilshaj Infotech. All Rights Reserved.
        </footer>
      </div>
    </div>
  );
}