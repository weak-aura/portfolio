import React from 'react';
import styles from "./Accordion.module.scss";
import {SingleSelectionAccordion} from "../../../components/SingleSelectionAccordion";
import {MultiSelectionAccordion} from "../../../components/MultiSelectionAccordion";

export const Accordion = () => {
  const selections: Array<{ name: string }> = [{name: "Multiple"}, {name: "Single"}]
  const [isSelected, setisSelected] = React.useState<string>(selections[0].name)

  return (
    <div className={styles.canvas}>
      <div className={styles.grid_f}>
        <div className={styles.switch_f}>
          {selections.map((el) => (
            <button key={el.name}
                    className={`${styles.switch} ${isSelected === el.name ? styles.selection_border : undefined}`}
                    onClick={() => setisSelected(el.name)}
            >
              <span className={isSelected === el.name && selections[0].name === el.name ? styles.rigid_body_r : undefined}/>
              <span className={isSelected === el.name && selections[1].name === el.name ? styles.rigid_body_x : undefined}/>
              <span className={isSelected === el.name ? styles.border_b_hidden : ""}/>
              {el.name}
            </button>
          ))}
        </div>
        <div
          className={`${styles.init_banner_f} ${isSelected === selections[1].name ? styles.rounded_tl : undefined}`}>
          <div className={"p-3"}>
            {isSelected === selections[0].name ? <MultiSelectionAccordion/> : <SingleSelectionAccordion/>}
          </div>
        </div>
      </div>

    </div>
  );
};

