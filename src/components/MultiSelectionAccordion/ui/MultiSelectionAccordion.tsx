import React from 'react';
import styles from "./MultiSelectionAccordion.module.scss";
import {faqArray} from "../../../assets/faq.ts";
export const MultiSelectionAccordion = () => {
  const [emptyArray, setEmptyArray] = React.useState<Array<{}>>([])
  const handleSelection = (getCurrentId: string) => {
    const prevEmptyArray : {}[] = [...emptyArray]
    const currentId : number = prevEmptyArray.indexOf(getCurrentId)
    if(currentId === -1) {
      prevEmptyArray.push(getCurrentId)
    } else {
      prevEmptyArray.splice(currentId, 1)
    }
    setEmptyArray(prevEmptyArray)
  }
  
  return (
    <React.Fragment>
      {faqArray.map((el) => (
        <div key={el.id} className={styles.main_frame}>
          <div className={styles.title} onClick={() => handleSelection(el.id)}>
            <h1>{el.title}</h1>
            <span>{emptyArray.indexOf(el.id) === -1 ? "+": "-"}</span>
          </div>

          <div className={`${styles.description} ${emptyArray.indexOf(el.id) !== -1 && styles.animate}`}>
            <p>{el.description}</p>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

