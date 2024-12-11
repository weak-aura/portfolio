// import React from "react";
import styles from "./TodoForm.module.scss";
import {RocketIcon, PlusIcon, BackspaceIcon} from "../../../assets/Icons.tsx";
import {ITodoForm} from "../../../types";

export const TodoForm = ({mouseEvent, value, changeEvent, setDescription}: ITodoForm) => {
  
  return (
    <form>
      <h1 className={styles.title}>
        <span className={styles.rocket_icon}>{<RocketIcon/>}</span>to
        <span className={styles.span_do}>do</span>
      </h1>
      <div className={styles.form_handler}>
        <label className={styles.label}>
          <input className={styles.input} type="text" placeholder="Create your list of task"
            // ref={inputRef}
                 value={value}
                 onChange={changeEvent}
          />
          {value &&
            <span className={styles.backspace_icon}
                  onClick={() => setDescription("")}
            ><BackspaceIcon/></span>}
        </label>
        <button className={styles.button}
                onClick={mouseEvent}
        >Add task
          <span><PlusIcon/></span>
        </button>

      </div>
    </form>
  );
};
