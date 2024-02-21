import React, { useEffect, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav id={styles.navbar} className={styles.mainContainer}>
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
        <Dropdown className={styles.dropdown}>
          <Dropdown.Toggle
            variant="success"
            id="dropdown-basic"
            className={`${styles.navbarButton} ${styles.dropdownButton}`}
          >
            About Us
          </Dropdown.Toggle>

          <Dropdown.Menu className={styles.dropdownMenu}>
            <div className={styles.dropdownContent}>
              <Dropdown.Item href="/company">Our Company</Dropdown.Item>
              <div className={styles.dropdownLine}></div>
              <Dropdown.Item href="/contacts">Contact Us</Dropdown.Item>
            </div>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </nav>
  );
}
