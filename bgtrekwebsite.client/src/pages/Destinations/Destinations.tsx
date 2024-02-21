import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import styles from "./Destinations.module.css";

export default function Destinations() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.searchSection}>
        <div className={styles.pexelsPhoto} />
        <svg className={styles.vector} />
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
          <form action="/destinations" method="get">
            <input
              type="text"
              name="search"
              id="search"
              required
              className={styles.searchTextbox}
              placeholder="Search A Destination ..."
            />
            <button type="submit" className={styles.searchButtonBackground}>
              <div className={styles.searchButton} />
            </button>
          </form>
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
              className={styles.dropdownButton}
            ></Dropdown.Toggle>

            <Dropdown.Menu className={styles.dropdownMenu}>
              <div className={styles.dropdownContent}>
                <Dropdown.Item href="/company">Cities</Dropdown.Item>
                <div className={styles.dropdownLine} />
                <Dropdown.Item href="/contacts">Villages</Dropdown.Item>
                <div className={styles.dropdownLine} />
                <Dropdown.Item href="/contacts">Resorts</Dropdown.Item>
                <div className={styles.dropdownLine} />
                <Dropdown.Item href="/contacts">Landmarks</Dropdown.Item>
              </div>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className={styles.frame}>
          <a className={styles.backIcon} href="/destinations" />
          <div className={styles.frame3}>
            {Array.from({ length: 2 }).map((_, rowIndex) => (
              <div className={styles.row} key={`row-${rowIndex}`}>
                {Array.from({ length: 3 }).map((_, elementIndex) => (
                  <div
                    className={styles.elementContainer}
                    key={`container-${rowIndex}-${elementIndex}`}
                  >
                    <div className={styles.destinationContainer}>
                      <div className={styles.linkButtonContainer}>
                        <a className={styles.linkButton} href="/destinations">
                          RUSE
                        </a>
                      </div>
                    </div>
                    <div className={styles.elementBorder}></div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <a className={styles.nextIcon} href="/destinations" />
        </div>
        <div className={styles.ellipse2} />
      </div>
    </div>
  );
}
