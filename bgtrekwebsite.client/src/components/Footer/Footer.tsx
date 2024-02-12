import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.headerBackground} />
      <div className={styles.rectangle} />
      <div className={styles.contactUsBackgroundArt} />
      <div className={styles.footerContactUs}>
        <div className={styles.rectangle1} />
        <button className={styles.contactUs}>CONTACT US</button>
        <div className={styles.rectangle2} />
        <div className={styles.contact} />
      </div>
      <div className={styles.footerLeftSection}>
        <div className={styles.pagesHeaders}>
          <span className={styles.destinations}>Destinations</span>
          <span className={styles.routes}>Routes</span>
          <span className={styles.blog}>Blog</span>
          <span className={styles.store}>Store</span>
        </div>
        <div className={styles.flexRowD}>
          <div className={styles.pagesLinks}>
            <div className={styles.flexRowBf}>
              <div className={styles.verticalContainer}>
                <span className={styles.sharedRoutes}>Shared Routes</span>
                <span className={styles.makeARoute}>Make a Route</span>
                <span className={styles.myRoutes}>My Routes</span>
              </div>
              <span className={styles.ourBlog}>Our Blog</span>
              <span className={styles.ourStore}>Our Store</span>
            </div>
            <div className={styles.flexRowBbc}>
              <div className={styles.verticalContainer3}>
                <span className={styles.villages}>Villages</span>
                <span className={styles.cities}>Cities</span>
                <span className={styles.landmarks}>Landmarks</span>
                <span className={styles.resorts}>Resorts</span>
              </div>
              <div className={styles.regroup}>
                <span className={styles.ourFaq}>Our FAQ</span>
                <div className={styles.verticalContainer4}>
                  <span className={styles.ourCompany}>Our Company</span>
                  <span className={styles.contactUs5}>Contact Us</span>
                </div>
              </div>
            </div>
          </div>
          <span className={styles.faq}>FAQ</span>
          <span className={styles.aboutUs}>About Us</span>
        </div>
        <div className={styles.horizontalLine} />
        <div className={styles.flexRowA}>
          <div className={styles.iconLinks}>
            <div className={styles.twitter} />
            <div className={styles.instagram} />
            <div className={styles.facebook} />
            <div className={styles.linkedinLogo} />
          </div>
          <span className={styles.bgTrek}>BG-TREK 2023™</span>
        </div>
      </div>
    </div>
  );
}
