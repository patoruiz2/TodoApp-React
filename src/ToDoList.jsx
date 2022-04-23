import React from 'react';
import { ToDoListItem } from './componentsToDoList/ToDoListItem.jsx';
import { useLocation } from 'react-router-dom';
import { ToDoListItemActive } from './componentsToDoList/ToDoListItemActive.jsx';
import { ToDoListItemComplete } from './componentsToDoList/ToDoListItemComplete';

export const ToDoList = ({ toDos, dispatch }) => {
  const actualLocation = useLocation();
  const { pathname } = actualLocation;
  // const response = useMatch(pathname)
  // console.log(actualLocation);
  // console.log(response);
  return (
    <ul>
      {(pathname.includes('active') 
        ? 
        <ToDoListItemActive toDos={toDos} dispatch={dispatch} /> 
        : 
        (pathname === '/') 
          ? <ToDoListItem toDos={toDos} dispatch={dispatch} /> 
          : <ToDoListItemComplete toDos={toDos} dispatch={dispatch} />
      )}

    </ul>
  )
};
