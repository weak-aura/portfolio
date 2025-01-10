import React from 'react';
import styles from "./ModalPopup.module.scss";
import {motion} from "framer-motion";
import {Images} from "../../../pages/Modal/ui/Modal.tsx";

type ModalProps = {
  selectedElement: Images | null,
  setSelectedElement: React.Dispatch<React.SetStateAction<Images | null>>
}
export const ModalPopup: React.FC<ModalProps> = ({selectedElement, setSelectedElement}) => {

  if (selectedElement === null) {
    return <></>
  }

  return (
    <React.Fragment>
      <div className={styles.overlay} onClick={() => setSelectedElement(null)}>
        <div className={styles.canvas}>
          <motion.div className={styles.behind_f}
                      layoutId={selectedElement.download_url}
                      transition={{duration: 0.3}}>
            <div className={styles.container}
                 onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => e.stopPropagation()}
            >
              <img className={styles.image}
                   src={selectedElement.download_url !== null ? selectedElement.download_url : undefined} alt="img"/>
              <h1>Author: {selectedElement.author}</h1>
              <hr/>
              <p className={styles.txt}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, sequi. Lorem
                ipsum dolor sit amet,
                consectetur adipisicing elit. Ex facere fuga libero temporibus vel voluptates voluptatum! Commodi quia
                quod
                rerum.</p>
              <div className={styles.btn_frame}>
                <button className={styles.btn} onClick={() => setSelectedElement(null)}>Close</button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </React.Fragment>
  );
};

