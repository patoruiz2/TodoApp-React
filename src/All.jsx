import React from 'react';
import { ToDoList } from './ToDoList.jsx';

export const All = ({ toDos, dispatch }) => {
  return (
    <ToDoList toDos={toDos} dispatch={dispatch}/>
  );
}