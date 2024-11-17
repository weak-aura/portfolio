import React from 'react';
import styles from "./PlacementOfImages.module.scss";
import {motion} from "framer-motion";
import {Images} from "../../../pages/Modal/ui/Modal.tsx";

type PlacementOfImagesProps = {
  images: Images[],
  setSelectedElement: React.Dispatch<React.SetStateAction<Images | null>>
}
export const PlacementOfImages: React.FC<PlacementOfImagesProps> = ({images, setSelectedElement}) => {
  
  
  return (
    <div className={styles.canvas}>
      <div className={styles.grid_f}>
        {images.map((el) => (
          <motion.div key={el.id}
                      className={styles.card}
                      id={styles[`id_${el.id}`]}
                      transition={{duration: 0.3}}
                      layoutId={el.download_url}
          >
            <img className={styles.image}
                 src={el.download_url} alt="img"
                 onClick={() => setSelectedElement(el)}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

