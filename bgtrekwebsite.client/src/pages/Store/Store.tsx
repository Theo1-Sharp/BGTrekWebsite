import React, { useState, useEffect, useRef } from "react";
import styles from "./Store.module.css";
import { Accordion } from "react-bootstrap";

interface Product {
  name: string;
  price: number;
}

export default function Main() {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const numberRef = useRef(null);

  const [products, setProducts] = useState<Product[]>();

  // Mocking products fetch
  useEffect(() => {
    // Mocked products data
    const mockedProducts: Product[] = [
      { name: "Short Sleeved T-Shirt", price: 29.99 },
      { name: "Short Sleeved T-Shirt", price: 29.99 },
      { name: "Short Sleeved T-Shirt", price: 29.99 },
      { name: "Short Sleeved T-Shirt", price: 29.99 },
      { name: "Short Sleeved T-Shirt", price: 29.99 },
      { name: "Short Sleeved T-Shirt", price: 29.99 },
      { name: "Short Sleeved T-Shirt", price: 29.99 },
      { name: "Short Sleeved T-Shirt", price: 29.99 },
      { name: "Short Sleeved T-Shirt", price: 29.99 },

      // Add more products here
    ];
    setProducts(mockedProducts);
  }, []);

  // useEffect(() => {
  //   populateProductsData();
  // }, []);

  async function populateProductsData() {
    const response = await fetch("/api/products");
    const data = await response.json();
    setProducts(data);
  }

  const renderProducts = (pageNumber: number) => {
    const productsPerPage = 8; // 2 rows * 4 products per row
    const startIndex = (pageNumber - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;

    const rows = [];
    if (products !== undefined) {
      const productsToShow = products.slice(startIndex, endIndex);
      for (let i = 0; i < productsToShow.length; i += 4) {
        const rowProducts = productsToShow.slice(i, i + 4);
        rows.push(
          <div className={styles.row} key={`row-${i / 4}`}>
            {rowProducts.map((product, index) => (
              <div
                className={styles.productContainer}
                key={`container-${startIndex + i + index}`}
              >
                <div className={styles.productImage} />
                <p className={styles.productName}>{product.name}</p>
                <p className={styles.productPrice}>
                  {product.price.toFixed(2)} BGN
                </p>
                <a className={styles.buyButton} href="/cart">
                  Add To Cart
                </a>
              </div>
            ))}
          </div>
        );
      }
    }

    return rows;
  };

  const onClickHandler = (
    event: React.MouseEvent<HTMLButtonElement>,
    newPageNumber: number
  ) => {
    // Calculate the maximum page number based on the number of products available
    const maxPageNumber = Math.ceil(products ? products.length : 0 / 8);

    // Ensure newPageNumber is within the range [1, maxPageNumber]
    const adjustedPageNumber = Math.max(
      1,
      Math.min(maxPageNumber, newPageNumber)
    );
    setPageNumber(adjustedPageNumber);
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
            <Accordion className={styles.sideAccordion}>
              <Accordion.Item
                eventKey="0"
                className={styles.sideButtonContainer}
              >
                <Accordion.Header>
                  <div className={styles.sideButton}>
                    <span className={styles.sort2}>Sort</span>
                    <div className={styles.list} />
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <button className={styles.subButton}>Price</button>
                  <button className={styles.subButton}>Name</button>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                eventKey="1"
                className={styles.sideButtonContainer}
              >
                <Accordion.Header>
                  <div className={styles.sideButton}>
                    <span className={styles.filter3}>Filter</span>
                    <div className={styles.filter4} />
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <div className={styles.subButtonContainer}>
                    <button className={styles.subButton}>Price</button>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                eventKey="2"
                className={styles.sideButtonContainer}
              >
                <Accordion.Header>
                  <div className={styles.sideButton}>
                    <span className={styles.categories6}>Categories</span>
                    <div className={styles.category} />
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <div className={styles.subButtonContainer}>
                    <button className={styles.subButton}>All</button>
                    <button className={styles.subButton}>Clothes</button>
                    <button className={styles.subButton}>Magnets</button>
                    <button className={styles.subButton}>Paintings</button>
                    <button className={styles.subButton}>Pottery</button>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <div className={styles.frameC}>
              <button
                className={styles.pagesButton}
                onClick={(e) => onClickHandler(e, pageNumber - 1)}
              >
                <div className={styles.arrowLeft} />
              </button>
              <input
                type="text"
                className={styles.pageNumber}
                ref={numberRef}
                value={pageNumber}
                onChange={(e) => setPageNumber(Number(e.target.value))}
                size={pageNumber.toString().length || 1}
              />
              <button
                className={styles.pagesButton}
                onClick={(e) => onClickHandler(e, pageNumber + 1)}
              >
                <div className={styles.arrowRight} />
              </button>
            </div>
          </div>
          <div className={styles.productsContainer}>
            {renderProducts(pageNumber)}
          </div>
        </div>
      </div>
    </div>
  );
}
