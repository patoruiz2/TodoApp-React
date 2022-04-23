import React, { useEffect, useReducer, useState } from 'react';
import { NavLink as NavLinkCustomize, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { All } from './All.jsx';
import { Active } from './Active.jsx';
import { Completed } from './Completed.jsx';
import { reducer } from './reducer/todoreducer.js';
import PropTypes from 'prop-types';

const init = () => { //Esstado inicial del estado (state)
  return JSON.parse(localStorage.getItem("toDoList")) || [];
};
const App = () => {
  const [inputValue, setinputValue] = useState('');
  const [toDoList, dispatch] = useReducer(reducer, [], init);
  
  useEffect(() => {
    localStorage.setItem('toDoList', JSON.stringify(toDoList));
  }, [toDoList]);// Solo se lanza cuando toDoList se renderiza o se modifica, como watcher de Vue

  const NavLink = ({ to, children, ...props }) => {
    return (
      <NavLinkCustomize
        {...props}
        className={({ isActive }) => isActive ? 'border-b-2 font-bold lg:border-b-4 xl:border-b-8' : undefined}
        to={to}
      >{children}
      </NavLinkCustomize>
    );
  };

  const handleClick = () => {
    if (inputValue.length < 2) return;
    const values = {
      id: Math.floor(Math.random() * 1000),
      task: inputValue,
      active: true,
      completed: false
    };
    dispatch({
      type: "Add",
      payload: values
    });
    setinputValue('');
  };
  const handleChange = (e) => {
    setinputValue(e.target.value);
  };
  return (
    <div
      className=' flex flex-col m-3 p-4 pb-1 h-fit content-center justify-center bg-[#1a1c22] rounded-lg shadow shadow-[#1a1c22]
      sm:m-auto sm:p-6 sm:w-10/12
      lg:p-4 lg:w-3/4 '
    >
      <nav className='my-3 mx-2 w-full border-b lg:border-b-2 lg:min-w-fit lg:mb-5'>
        <ul className='flex flex-row items-center justify-between lg:mb-5'>
          <li className='m-4 w-full text-center text-xl md:text-3xl lg:text-4xl lg:pb-4 lg:m-0 xl:text-5xl'>
            <NavLink to="/">All</NavLink>
          </li>
          <li className='m-4 w-full text-center text-xl md:text-3xl lg:text-4xl lg:pb-4 lg:m-0 xl:text-5xl'>
            <NavLink to="/active">
              Active
            </NavLink>
          </li>
          <li className='m-4 w-full text-center text-xl md:text-3xl lg:text-4xl lg:pb-4 lg:m-0 xl:text-5xl'>
            <NavLink to="/completed">
              Completed
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className='flex w-full mx-auto my-3 justify-center md:max-h-28 lg:max-h-32' >
        <input
          type="text"
          className='
        w-1/2 mx-2 h-8 rounded-md 
        bg-[#1a1c22] border border-[#5fd9fb]
        shadow shadow-[#5fd9fb]
        focus:outline-none focus-within:border-2 p-2
        md:h-11 md:w-full md:text-xl lg:h-16 lg:text-3xl xl:mx-5
        '
          value={inputValue}
          onChange={handleChange} />
        <button
          className='
        transition-all ease-out duration-200
        w-1/3 mx-2 bg-[#5fd9fb] text-[#181a1b] font-bold rounded-md
        active:bg-[#4db7d4] md:min-h-full md:w-1/4 md:text-xl lg:text-3xl'
          onClick={handleClick} >
          Submit
        </button>
      </div>
      <Routes>
        <Route path="TodoApp-React/" element={<All toDos={ toDoList } dispatch={dispatch} />} />
        <Route path="TodoApp-React/active" element={<Active toDos={ toDoList } dispatch={dispatch}  />} />
        <Route path="TodoApp-React/completed" element={<Completed toDos={ toDoList } dispatch={dispatch}  />} />
      </Routes>
    </div>
  );
};

App.propTypes = {};
App.defaultProps = {};
export default App;
