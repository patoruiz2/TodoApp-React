import React from 'react';
import { handlers } from '../handlers/handlers-todos.js';

export const ToDoListItem = ({ toDos, dispatch }) => {
  const { handleCheckChange } = handlers
  return (
    <>
      {
        toDos.map(({ task, id, active }) => (
          <li key={id} className='flex flex-row mb-2 h-full w-full md:mb-3 lg:mb-5 xl:mb-7'>
            <input type="checkbox" name={task} id={id} checked={!active} 
              onChange={() => handleCheckChange(id, dispatch)}
              className='h-8 w-8 mx-5 lg:h-14 lg:w-14'
            />
            <label htmlFor={id}
              className={
                !active ? 'line-through font-bold m-auto w-full h-auto' : 'w-full h-auto m-auto'
              }
            >
              <span className='align-middle justify-center text-left md:text-lg lg:text-3xl'>
                {task}
              </span>
            </label>
          </li>
        ))
      }
    </>
  )
};
