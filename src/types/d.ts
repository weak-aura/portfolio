import React from "react";

interface IRemoveTodoItem {
  removeTodoItem?: (getId: string) => void,
}

interface IToggleCompleted {
  toggleTodoCompleted?: (getId: string) => void
}

export interface ITodo extends IRemoveTodoItem, IToggleCompleted {
  id: string,
  description: string,
  completed: boolean
}

interface IDescription {
  setDescription: React.Dispatch<React.SetStateAction<string>>
}

export interface ITodoForm extends IDescription {
  value?: string,
  changeEvent?: React.ChangeEventHandler<HTMLInputElement> | undefined,
  mouseEvent: React.MouseEventHandler<HTMLButtonElement>
}

