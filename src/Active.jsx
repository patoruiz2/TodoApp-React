import React from 'react';

export const Active = ({ items, dispatch }) => {

  const handleCheckChange = (id) => {
    dispatch({
      type: 'Toggle',
      payload: id
    });
  };
  return (
    <ul>
      {
        items.map(({ id, task, active }, index) => {
          if (active) (
            <li key={id} className='flex flex-row mb-2 h-full w-full md:mb-3 lg:mb-5 xl:mb-7'>
              <input type="checkbox" name={task} id={id} checked={!active} onChange={() => handleCheckChange(id)}
                className='h-8 w-8 mx-5 lg:h-14 lg:w-14'
              />
              <label htmlFor={id} className='w-full h-auto m-auto'>
                <span className='align-middle justify-center text-left md:text-lg lg:text-3xl'>
                  {task}
                </span>
              </label>
              <hr />
            </li>
          )
          return <li key={id}></li>
        })
      }
    </ul>
  );
};