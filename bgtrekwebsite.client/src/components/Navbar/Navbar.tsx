import React, { useEffect, useState, useRef } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [aboutUsIsOpen, setAboutUsIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = () => {
    if (dropdownRef.current) {
      if (aboutUsIsOpen) {
        setAboutUsIsOpen(false);
      } else {
        setAboutUsIsOpen(true);
      }
    }
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setAboutUsIsOpen(false);
    }
  };

  useEffect(() => {
    console.log(aboutUsIsOpen);
    console.log(dropdownRef.current);
    if (dropdownRef.current) {
      aboutUsIsOpen
        ? (dropdownRef.current.style.display = "flex")
        : (dropdownRef.current.style.display = "none");
    }
  }, [aboutUsIsOpen]);

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div id={styles.navbar} className={styles.mainContainer}>
      <div className={styles.navbarBackground} />
      <div className={styles.homeButton}>
        <a className={styles.bgTrek} href="/home">
          <span className={styles.bg}>BG</span>
          <span className={styles.text2}>-</span>
          <span className={styles.trek}>Trek</span>
        </a>
      </div>
      <div className={styles.accountsButtons}>
        <div className={styles.rectangle} />
        <div className={styles.buttons}>
          <a className={styles.loginButton} href="/login">
            <span className={styles.login}>Login</span>
          </a>
          <a className={styles.signUpButton} href="/register">
            <span className={styles.signUp}>Sign Up</span>
          </a>
        </div>
      </div>
      <div className={styles.faqCart}>
        <a className={styles.faq} href="/faq">
          FAQ
        </a>
        <a className={styles.shoppingCart} href="/cart" />
      </div>
      <div className={styles.navigationButtons}>
        <a className={styles.navbarButton} href="/blogs">
          Blogs
        </a>
        <a className={styles.navbarButton} href="/destinations">
          Destinations
        </a>
        <a className={styles.navbarButton} href="/store">
          Store
        </a>
        <div className={styles.dropdown}>
          <button
            onClick={handleButtonClick}
            className={`${styles.navbarButton} ${styles.dropdownButton}`}
          >
            About us
          </button>
          <div className={styles.dropdownContent} ref={dropdownRef}>
            <a href="/company">Our Company</a>
            <div className={styles.line}></div>
            <a href="/contacts">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  );
}
