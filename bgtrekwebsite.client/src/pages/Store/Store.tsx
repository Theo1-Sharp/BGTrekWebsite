import React, { useState, useRef } from "react";
import styles from "./Store.module.css";

export default function Main() {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const numberRef = useRef(null);

  const onClickHandler = (
    event: React.MouseEvent<HTMLButtonElement>,
    leftOrRight: boolean
  ) => {
    if (leftOrRight) {
      setPageNumber(Math.min(10, pageNumber + 1));
    } else {
      // Ensure pageNumber doesn't go below 1
      setPageNumber(Math.max(1, pageNumber - 1));
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.tourismConceptTravelerBackground}>
        <span className={styles.souvenirs}>Souvenirs</span>
      </div>
      <div className={styles.souvenirsForThrilledTravelleres}>
        <span className={styles.souvenirsForThrilled}>
          Souvenirs for thrilled{" "}
        </span>
        <span className={styles.travelleres}>travelleres</span>
      </div>
      <span className={styles.getYourselfSome}>
        Get yourself some fancy souvenirs to show the places you have visited
        around the world
      </span>
      <div className={styles.storeSection}>
        <div className={styles.line} />
        <div className={styles.frame}>
          <div className={styles.frame1}>
            <div className={styles.group}>
              <button className={styles.sideButton}>
                <span className={styles.sort2}>Sort</span>
                <div className={styles.list} />
              </button>
              <div className={styles.subButtonContainer}>
                <button className={styles.subButton}>Price</button>
                <button className={styles.subButton}>Name</button>
              </div>
              <div className={styles.sideButtonContainer}>
                <button className={styles.sideButton}>
                  <span className={styles.filter3}>Filter</span>
                  <div className={styles.filter4} />
                </button>
                <div className={styles.subButtonContainer}>
                  <button className={styles.subButton}>Price</button>
                </div>
              </div>
              <div className={styles.sideButtonContainer}>
                <button className={styles.sideButton}>
                  <span className={styles.categories6}>Categories</span>
                  <div className={styles.category} />
                </button>
                <div className={styles.subButtonContainer}>
                  <button className={styles.subButton}>All</button>
                  <button className={styles.subButton}>Clothes</button>
                  <button className={styles.subButton}>Magnets</button>
                  <button className={styles.subButton}>Paintings</button>
                  <button className={styles.subButton}>Pottery</button>
                </div>
              </div>
            </div>
            <div className={styles.frameC}>
              <button
                className={styles.pagesButton}
                onClick={(e) => onClickHandler(e, false)}
              >
                <div className={styles.arrowLeft} />
              </button>
              <p className={styles.text17} ref={numberRef}>
                {pageNumber}
              </p>
              <button
                className={styles.pagesButton}
                onClick={(e) => onClickHandler(e, true)}
              >
                <div className={styles.arrowRight} />
              </button>
            </div>
          </div>
          <div className={styles.productsContainer}>
            {Array.from({ length: 2 }).map((_, rowIndex) => (
              <div className={styles.row} key={`row-${rowIndex}`}>
                {Array.from({ length: 4 }).map((_, elementIndex) => (
                  <div
                    className={styles.productContainer}
                    key={`container-${rowIndex}-${elementIndex}`}
                  >
                    <div className={styles.productImage} />
                    <p className={styles.productName}>Short Sleeved T-Shirt</p>
                    <p className={styles.productPrice}>29.99 BGN</p>
                    <button className={styles.buyButton}>Add To Cart</button>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
