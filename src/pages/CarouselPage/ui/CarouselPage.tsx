// import React from 'react';
import {Carousel} from "../../../components/Carousel";
import styles from "./CarouselPage.module.scss";

export const CarouselPage = () => {
  return (
    <div className={styles.root}>
      <Carousel>
        <div className={`${styles.slide} ${styles.slide_1}`}>item 1</div>
        <div className={`${styles.slide} ${styles.slide_2}`}>item 2</div>
        <div className={`${styles.slide} ${styles.slide_3}`}>item 3</div>
      </Carousel>
    </div>
  );
};

