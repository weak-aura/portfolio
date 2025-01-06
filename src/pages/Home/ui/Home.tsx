// import React from 'react';
import styles from "./Home.module.scss";
import photo from "../../../assets/photo.jpg"

export const Home = () => {

  return (
    <div className={styles.canvas}>
      <div className={styles.primary_frame}>
        <div className={styles.author}>
          <h1>Bekzat Tulebayev</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur beatae culpa cum eligendi fugit hic
            illo labore maxime numquam pariatur perferendis quas tempore, voluptate voluptates.</p>
          <a href="https://wa.me/+77472999242"><button className={styles.btn}>Contact me by WhatsApp</button></a>
        </div>
        <div className={styles.image}>
          <img src={photo} alt="img"/>
        </div>
      </div>
    </div>
  );
};

