import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import styles from "./Destinations.module.css";

export default function Destinations() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.searchSection}>
        <div className={styles.pexelsPhoto} />
        <div className={styles.vector} />
        <div className={styles.breathtakingDestinations}>
          <span className={styles.comeAndSee}>
            Come and see
            <br />
            what breathtaking destinations
            <br />
            Bu
          </span>
          <span className={styles.lga}>lga</span>
          <span className={styles.ria}>ria</span>
          <span className={styles.hasToOffer}> has to offer!</span>
        </div>
        <div className={styles.search}>
          <div className={styles.rectangle1} />
          <div className={styles.searchButton} />
          <button className={styles.searchTextbox}>
            <span className={styles.searchADestination}>
              Search A Destination ...
            </span>
            <div className={styles.rectangle2} />
          </button>
        </div>
      </div>
      <div className={styles.destinationsSection}>
        <div className={styles.ellipse} />
        <div className={styles.background} />
        <div className={styles.destinationsHeading}>
          <div className={styles.line} />
          <span className={styles.cities}>CITIES</span>
          <Dropdown className={styles.dropdown}>
            <Dropdown.Toggle
              variant="success"
              id="dropdown-basic"
              className={styles.chose}
            ></Dropdown.Toggle>

            <div className={styles.dropdownMenu}>
              <Dropdown.Menu>
                <div className={styles.dropdownContent}>
                  <Dropdown.Item href="/company">Our Company</Dropdown.Item>
                  <div className={styles.line}></div>
                  <Dropdown.Item href="/contacts">Contact Us</Dropdown.Item>
                </div>
              </Dropdown.Menu>
            </div>
          </Dropdown>
        </div>
        <div className={styles.frame}>
          <div className={styles.backIcon} />
          <div className={styles.frame3}>
            {Array.from({ length: 2 }).map((_, rowIndex) => (
              <div className={styles.row} key={`row-${rowIndex}`}>
                {Array.from({ length: 3 }).map((_, elementIndex) => (
                  <div
                    className={styles.elementContainer}
                    key={`container-${rowIndex}-${elementIndex}`}
                  >
                    <div className={styles.destinationContainer}>
                      <a className={styles.linkButton} href="/">
                        RUSE
                      </a>
                    </div>
                    <div className={styles.elementBorder}></div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className={styles.nextIcon} />
        </div>
        <div className={styles.ellipse20} />
      </div>
    </div>
  );
}
