import React from "react";
import styles from "./Home.module.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Main() {
  return (
    <div className={styles.mainContainer}>
      <img className={styles.mainContainerImage} />
      <Navbar />
      <div className={styles.heroSection}>
        <div className={styles.heroText}>
          <span className={styles.travellingMadeEasy}>
            Travelling Made Easy
          </span>
          <div className={styles.heroSubtext}>
            <span className={styles.embarkOnAJourney}>
              Embark on a journey of discovery and indulge in the beauty of the
              world.
            </span>
            <div className={styles.heroSubtextBackground} />
          </div>
        </div>
        <div className={styles.heroBackground}>
          <div className={styles.heroBackgroundContainer}>
            <svg className={styles.vector4} />
            <svg className={styles.vector5} />
          </div>
        </div>
      </div>
      <div className={styles.contentSection}>
        <div className={styles.group}>
          <div className={styles.rectangle2} />
          <div className={styles.contentText}>
            <span className={styles.discoverBulgariaWithBgTrek}>
              Discover Bulgaria with BG-TREK
            </span>
            <div className={styles.exploreTheHiddenGemsOfBulgaria}>
              <p className={styles.exploreTheHiddenGemsOfBulgaria3}>
                Explore the Hidden Gems of Bulgaria: Journey through the vibrant
                cities, serene countryside, and majestic mountains of Bulgaria
                with BG-TREK. Our expertly curated destinations offer an
                authentic experience of Bulgaria’s rich culture and breathtaking
                landscapes.
                <br />
              </p>
              <span className={styles.textF}>
                <br />
              </span>
            </div>
          </div>
        </div>
        <div className={styles.bc} />
      </div>
      <div className={styles.citiesSection}>
        <span className={styles.cities}>Cities</span>
        <span className={styles.comeAndTakeALook}>
          Come and take a look at these wonderful cities, peruse their offerings
          and experience journeys
        </span>
        <div className={styles.frame}>
          <div className={styles.varna}>
            <div className={styles.button}>
              <button className={styles.varnaButton} />
              <div className={styles.rectangle4} />
            </div>
            <div className={styles.rectangle5} />
          </div>
          <div className={styles.frame6}>
            <div className={styles.sofia}>
              <button className={styles.button7}>
                <span className={styles.sofiaButton}>SOFIA</span>
                <div className={styles.rectangle8} />
              </button>
              <div className={styles.rectangle9} />
            </div>
            <div className={styles.plovdiv}>
              <button className={styles.buttonA}>
                <span className={styles.plovdivButton}>PLOVDIV</span>
                <div className={styles.rectangleB} />
              </button>
              <div className={styles.rectangleC} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.statisticsSection}>
        <div className={styles.horizontalStatistics}>
          <span className={styles.reviews}>
            1500
            <br />
            REVIEWS
          </span>
          <span className={styles.destinationsD}>
            350
            <br />
            Destinations
          </span>
          <span className={styles.users}>
            5000
            <br />
            USERS
          </span>
        </div>
        <div className={styles.line} />
      </div>
      <Footer />
    </div>
  );
}
