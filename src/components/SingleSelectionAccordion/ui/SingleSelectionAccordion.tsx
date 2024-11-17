import React from 'react';
import styles from "./SingleSelectionAccordion.module.scss";
import {faqArray} from "../../../assets/faq.ts";

export const SingleSelectionAccordion = () => {
  const [selected, setSelected] = React.useState<string | null>(null)

  const handleSelection = (getCurrentId: string) => {
    setSelected(getCurrentId === selected? null : getCurrentId)
  }
  return (
    <React.Fragment>
      {faqArray.map((el) => (
        <div key={el.id} className={styles.main_frame}>
          <div className={styles.title}
               onClick={() => handleSelection(el.id)}
          >
            <h1>{el.title}</h1>
            <span>{selected === el.id? "-": "+"}</span>
          </div>

          <div className={`${styles.description} ${selected === el.id && styles.animate}`}>
            <p>{el.description}</p>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

