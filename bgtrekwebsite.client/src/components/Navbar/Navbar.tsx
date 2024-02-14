import React from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div id={styles.navbar} className={styles.mainContainer}>
      <div className={styles.navbarBackground} />
      <div className={styles.homeButton}>
        <button className={styles.bgTrek}>
          <span className={styles.bg}>BG</span>
          <span className={styles.text2}>-</span>
          <span className={styles.trek}>Trek</span>
        </button>
      </div>
      <div className={styles.accountsButtons}>
        <div className={styles.rectangle} />
        <div className={styles.buttons}>
          <button className={styles.loginButton}>
            <span className={styles.login}>Login</span>
          </button>
          <button className={styles.signUpButton}>
            <span className={styles.signUp}>Sign Up</span>
          </button>
        </div>
      </div>
      <div className={styles.faqCart}>
        <span className={styles.faq}>FAQ</span>
        <div className={styles.shoppingCart} />
      </div>
      <div className={styles.navigationButtons}>
        <a className={styles.navbarButton}>Blog</a>
        <a className={styles.navbarButton}>Destinations</a>
        <a className={styles.navbarButton}>Store</a>
        <a className={styles.navbarButton}>About Us</a>
      </div>
    </div>
  );
}
