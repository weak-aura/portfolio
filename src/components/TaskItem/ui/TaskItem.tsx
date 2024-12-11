// import React from 'react';
import {DeleteIcon} from "../../../assets/Icons.tsx";
import styles from "./TaskItem.module.scss"
import {ITodo} from "../../../types";

export const TaskItem = ({id, description, completed, removeTodoItem, toggleTodoCompleted} : ITodo) => {

  const optionalityCheck = () => {
    return removeTodoItem ? removeTodoItem(id) : undefined;
  }
  
  const optionalityCheckOfToggle = () => {
    return toggleTodoCompleted? toggleTodoCompleted(id) : undefined;
  }

  return (
    <div className={styles.frame}>
      {!completed ? (
        <span onClick={optionalityCheckOfToggle} className={styles.unchecked}/>
      ) : (
        <span onClick={optionalityCheckOfToggle} className={styles.checked}>&#10003;</span>
      )}
      <h1 className="font-normal text-sm flex-1">{description}
      </h1>
      <div className={styles.svg}
           onClick={optionalityCheck}
      ><DeleteIcon/></div>
    </div>
  );
};

