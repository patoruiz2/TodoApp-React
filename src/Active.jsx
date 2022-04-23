import React from 'react';
import { ToDoList } from './ToDoList.jsx';

export const Active = ({ toDos, dispatch }) => {
  return (
   <ToDoList toDos={toDos} dispatch={dispatch}/>
  );
};