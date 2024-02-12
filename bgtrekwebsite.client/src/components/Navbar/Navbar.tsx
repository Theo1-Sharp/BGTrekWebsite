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
        <div className={styles.blogButton}>
          <span className={styles.blog}>Blog</span>
        </div>
        <div className={styles.destinationsButton}>
          <span className={styles.destinations}>Destinations</span>
        </div>
        <div className={styles.storeButton}>
          <span className={styles.store}>Store</span>
        </div>
        <div className={styles.aboutUsButton}>
          <span className={styles.aboutUs}>About Us</span>
        </div>
      </div>
    </div>
  );
}
