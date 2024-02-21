import React, { useEffect, useState, useRef } from "react";
import styles from "./PageResize.module.css";

export default function PageResize({
  children,
}: {
  children: React.ReactNode;
}) {
  const scaleRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [scaleValue, setScaleValue] = useState<number>(1);
  const [scrollDist, setScrollDist] = useState<number>(0);

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
      setScaleValue(scaleFactor);
      contentElement.style.transform = `scale(${scaleFactor}) `;

      if (scaleElement) {
        scaleElement.style.height = `${contentHeight * scaleFactor}px`;
      }
    }
  };

  //Fix navbar not sticking to top properly due to scale
  useEffect(() => {
    document
      .getElementsByTagName("nav")[0]
      .style.setProperty(
        "top",
        (scrollDist / scaleValue - scrollDist).toString() + "px"
      );
  }, [scrollDist, scaleContainerWidth]);

  //Scale page so that it is always visible no matter browser size
  useEffect(() => {
    scalePage();
  }, [scaleContainerWidth]);

  //Add event listeners to update values on window change
  useEffect(() => {
    const handleResize = () => {
      setScaleContainerWidth(Number(scaleRef.current?.offsetWidth));
    };

    const handleScroll = () => {
      setScrollDist(window.scrollY);
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //This code is used for first time renders
  useEffect(() => {
    setScaleContainerWidth(Number(scaleRef.current?.offsetWidth));
  }, []);

  //Wrapping containers
  return (
    <div className={styles.scaleContainer} ref={scaleRef}>
      <div className={styles.contentPage} ref={contentRef}>
        {children}
      </div>
    </div>
  );
}
