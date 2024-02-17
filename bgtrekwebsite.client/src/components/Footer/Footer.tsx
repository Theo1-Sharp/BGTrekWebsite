import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.headerBackground} />
      <div className={styles.imageBackground} />
      <div className={styles.contactUsBackgroundArt} />
      <div className={styles.footerContactUs}>
        <div className={styles.rectangle} />
        <p className={styles.contactUsHeading}>CONTACT US</p>
        <div className={styles.rectangle1} />
        <div className={styles.contact} />
      </div>
      <div className={styles.footerLeftSection}>
        <div className={styles.navigationLinks}>
          <div className={styles.row}>
            <div className={styles.blogsSection}>
              <a className={styles.blogs}>Blogs</a>
              <div className={styles.verticalContainer}>
                <a className={styles.ourBlogs} href="/blogs">
                  Our Blogs
                </a>
              </div>
            </div>
            <div className={styles.destinationsSection}>
              <span className={styles.destinations}>Destinations</span>
              <div className={styles.verticalContainer2}>
                <a className={styles.ourDestinations} href="/destinations">
                  Our Destinations
                </a>
              </div>
            </div>
          </div>
          <div className={styles.row3}>
            <div className={styles.storeSection}>
              <span className={styles.store}>Store</span>
              <div className={styles.verticalContainer4}>
                <a className={styles.ourStore} href="/store">
                  Our Store
                </a>
              </div>
            </div>
            <div className={styles.aboutUs}>
              <span className={styles.aboutUs5}>About Us</span>
              <div className={styles.verticalContainer6}>
                <a className={styles.ourCompany} href="/company">
                  Our Company
                </a>
                <a className={styles.contactUs} href="/contacts">
                  Contact Us
                </a>
              </div>
            </div>
            <div className={styles.faqSection}>
              <span className={styles.faq}>FAQ</span>
              <div className={styles.verticalContainer8}>
                <a className={styles.ourFaq} href="/faq">
                  Our FAQ
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.socialLinks}>
          <div className={styles.horizontalLine} />
          <div className={styles.iconLinks}>
            <a
              className={styles.twitter}
              href="https://www.twitter.com/bgtrek"
            />
            <a
              className={styles.instagram}
              href="https://www.instagram.com/bgtrek"
            />
            <a
              className={styles.facebook}
              href="https://www.facebook.com/bgtrek"
            />
            <a
              className={styles.linkedIn}
              href="https://www.linkedin.com/in/bgtrek"
            />
          </div>
          <a className={styles.bgTrek} href="/home">
            BG-TREK 2023™
          </a>
        </div>
      </div>
    </div>
  );
}
