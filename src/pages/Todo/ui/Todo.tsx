import React from 'react';
import {TodoForm} from "../../../components/TodoForm";
import {TaskItem} from "../../../components/TaskItem";
import {ITodo} from "../../../types";


export const Todo = () => {

  const [description, setDescription] = React.useState("")
  const [todoList, setTodoList] = React.useState<ITodo[]>([])

  const changeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value)
  }

  const addEventHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const newTodoItem: ITodo = {
      id: Math.random().toString(),
      completed: false,
      description: description
    }

    if (newTodoItem.description === "") {
      return
    }

    setTodoList([...todoList, newTodoItem])
    setDescription("")
  }

  const removeTodoItem = (getId: string) => {
    const removeTodoItem: ITodo[] = todoList.filter(el => el.id !== getId)
    setTodoList(removeTodoItem)
  }

  const toggleTodoCompleted = (getId: string) => {
    setTodoList(todoList.map((el: ITodo) => {
      if (el.id !== getId) {
        return el
      } else {
        return {...el, completed: !el.completed}
      }
    }))
  }

  return (
    <div className={"m-auto mt-[200px] max-w-[730px] px-[20px]"}>
      <TodoForm value={description}
                changeEvent={changeEventHandler}
                mouseEvent={addEventHandler}
                setDescription={setDescription}

      />
      <br/>
      {todoList.map((el) => {
        return (
          <React.Fragment key={el.id}>
            <TaskItem {...el} removeTodoItem={removeTodoItem} toggleTodoCompleted={toggleTodoCompleted}/>
          </React.Fragment>
        )
      })}
    </div>
  );
};

