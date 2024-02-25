import React from "react";
import styles from "./Location.module.css";

export default function Location() {
  return (
    <div className={styles.mainContainer}>
      <img className={styles.backgroundImage}></img>
      <div className={styles.flexRowE}>
        <div className={styles.heroSection}>
          <div className={styles.vector} />
          <div className={styles.heading}>
            <span className={styles.ruse}>RUSE</span>
            <div className={styles.rectangle1} />
            <div className={styles.rectangle2} />
          </div>
          <div className={styles.text}>
            <span className={styles.ruseCityDescription}>
              Ruse (also transliterated as Rousse, Russe) is the fifth largest
              city in Bulgaria.
              <br />
              <br />
              Thanks to its location and its railway and road bridge over the
              Danube (Danube Bridge), it is the most significant Bulgarian river
              port, serving an important part of the international trade of the
              country.
            </span>
          </div>
        </div>
        <div className={styles.locationSection1}>
          <div className={styles.ruseArchitectureDescription}>
            Ruse is known for its 19th- and 20th-century Neo-Baroque and
            Neo-Rococo architecture, which attracts many tourists. It is often
            called the Little Vienna. The Ruse-Giurgiu Friendship Bridge , until
            14 June 2013 the only one in the shared Bulgarian-Romanian section
            of the Danube, crosses the river here.
          </div>
        </div>
        <img className={styles.img4} />
        <div className={styles.vectorOrange} />
        <div className={styles.line} />
      </div>
      <div className={styles.ruseLocation}>
        Ruse is located in the northeastern part of the country, on the right
        bank of the Danube, opposite the Romanian city of Giurgiu, approximately
        75 km (47 mi) south of Bucharest, Romania's capital, 200 km (124 mi)
        from the Bulgarian Black Sea Coast and 300 km (186 mi) from the capital
        Sofia.
        <br />
        <br />
        Add More Text...
        <br />
      </div>
      <div className={styles.flexRow}>
        <div className={styles.line12} />
        <div className={styles.commentSection}>
          <div className={styles.addCommentSection}>
            <button className={styles.addComment}>ADD COMMENT</button>
          </div>
          <div className={styles.comment}>
            <div className={styles.commentHeading}>
              <div className={styles.userImage} />
              <span className={styles.userName}>User Name</span>
              <div className={styles.rating}>
                {Array.from({ length: 5 }).map((_, elementIndex) =>
                  elementIndex < 3 ? (
                    <img
                      className={`${styles.star} ${styles.starOn}`}
                      key={elementIndex}
                    ></img>
                  ) : (
                    <img
                      className={`${styles.star} ${styles.starOff}`}
                      key={elementIndex}
                    ></img>
                  )
                )}
              </div>
              <div className={styles.date}>2024.2.22</div>
            </div>
            <div className={styles.commentTextbox}>
              <p className={styles.userComment}>User Comment ...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
