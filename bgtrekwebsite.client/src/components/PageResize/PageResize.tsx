import React, { ReactNode, useEffect, useState, useRef } from "react";
import styles from "./PageResize.module.css";

export default function Main({ children }: { children: React.ReactNode }) {
  const scaleRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const elements: HTMLCollectionOf<Element> =
    document.getElementsByClassName("scaleContainer");

  const [scaleContainerWidth, setScaleContainerWidth] = useState<number>(
    Number(scaleRef.current?.offsetWidth)
  );

  const scalePage = () => {
    const contentElement = contentRef.current;
    const scaleElement = scaleRef.current;

    if (contentElement) {
      const contentWidth: number = Number(contentElement?.offsetWidth);
      const contentHeight: number = Number(contentElement?.offsetHeight);
      const scaleFactor = Number(scaleContainerWidth) / contentWidth;
      console.log(`${scaleContainerWidth} ` + `${contentWidth}`);
      contentElement.style.transform = `scale(${scaleFactor}) `;

      if (scaleElement) {
        scaleElement.style.height = `${contentHeight * scaleFactor}px`;
      }
    }
  };

  //Scale page so that it is always visible no matter browser size
  useEffect(() => {
    scalePage();
  }, [scaleContainerWidth]);

  //Add event listeners to update values on window change
  useEffect(() => {
    const handleResize = () => {
      setScaleContainerWidth(Number(scaleRef.current?.offsetWidth));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //This code is used for first time renders
  useEffect(() => {
    setScaleContainerWidth(Number(scaleRef.current?.offsetWidth));
  }, []);

  const [width, setWidth] = useState(0);

  useEffect(() => {
    console.log(width);
  }, [width]);

  //Wrapping containers
  return (
    <div className={styles.scaleContainer} ref={scaleRef}>
      <div className={styles.contentPage} ref={contentRef}>
        {children}
      </div>
    </div>
  );
}
