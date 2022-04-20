import React, { useContext, useEffect, useReducer, useState } from 'react';
import { NavLink as NavLinkCustomize, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import PropTypes from 'prop-types';

const init = () => { //Esstado inicial del estado (state)
  return JSON.parse(localStorage.getItem("toDoList")) || [];
};
//Acciones de una aplicacion - logica de la manipulacion
const reducer = (state, action) => {//El reducer → Mapa de procedimientos-acciones para realizar CRUD por ej...
  switch (action.type) {
    case "Add":
      return [...state, action.payload]; //Siempre regresa un estado nuevo
    case "Toggle":
      return state.map(todo => {
        return todo.id === action.payload ? { ...todo, active: !todo.active, completed: !todo.completed } : todo
      })
    case "Delete":
      return state.filter(todo => todo.id !== action.payload);
    case "DeleteAll":
      return state.filter(todo => !todo.completed)
    default:
      return state; //siempre debe regresar un state
  };
};

const All = ({ items, dispatch }) => {
  const handleCheckChange = (id) => {
    dispatch({
      type: 'Toggle',
      payload: id
    });
  };
  return (
    <ul>
      {
        items.map(({ task, id, active, completed }, index) => (
          <li key={index + 1}>
            <label htmlFor={id} className={!active ? 'line-through font-bold' : undefined}>
              <input type="checkbox" name={task} id={id} key={id} checked={!active} onChange={() => handleCheckChange(id)} /> {/* () => handleCheckChange(id) para pasarle un argumento en especifico*/}
              {task}
            </label>
            {/* <input type="checkbox" name={task} id={id} key={id} checked={completed} onChange={() => handleCheckChangeCompleted(id)} /> */}
            <br />
            Activo: {active ? "Activo" : "No Activo"} <br />
            Completado: {completed ? "Completado" : "No Completado"}<br />
            <hr />
          </li>
        ))
      }
    </ul>
  );
};

const Active = ({ items, dispatch }) => {

  const handleCheckChange = (id) => {
    dispatch({
      type: 'Toggle',
      payload: id
    });
  };
  return (
    <ul>
      {
        items.map(({ id, task, active, completed }, index) => {
          if (active) {
            return (
              <li key={index + 1}>
                <label htmlFor={id}>
                  <input type="checkbox" name={task} id={id} key={id} checked={!active} onChange={() => handleCheckChange(id)} />
                  {task}
                </label>
                <br />
                Activo: {active ? "Activo" : "No Activo"} <br />
                Completado: {completed ? "Completado" : "No Completado"}<br />
                <hr />
              </li>
            )
          }
          return (
            <li>

            </li>
          )
        })
      }
    </ul>
  );
};

const Completed = ({ items, dispatch }) => {
  const handleCheckChange = (id) => {
    dispatch({
      type: 'Toggle',
      payload: id
    });
  };
  const deleteTask = (id) => {
    dispatch({
      type: 'Delete',
      payload: id
    });
  };
  const deleteAll = () => {
    console.log(items);
    dispatch({
      type: 'DeleteAll',
      payload: items
    });
  };
  return (
    <div className='w-full mx-auto my-8'>
      <ul className=''>
        {
          items.map(({ id, task, active, completed }, index) => {
            if (completed) return (
              <li key={index + 1} className='flex flex-row justify-between h-full w-full'>
                <input type="checkbox" name={task} id={id} key={id} checked disabled
                  className='h-8 w-8 mx-5 disabled:opacity-40'
                />
                <label className='w-full h-auto opacity-40 line-through font-bold' >
                  <span className='align-middle justify-center text-left'>
                    {task}
                  </span>
                </label>
                {/* <input type="checkbox" name={task} id={id} key={id} checked={completed} onChange={() => handleCheckChangeCompleted(id)} /> */}
                <button onClick={() => deleteTask(id)} className='w-auto h-auto'>
                  Delete
                </button>
              </li>
            )
          })
        }
        <br />
        <hr />
        <button onClick={deleteAll}
          className='border border-red-600 bg-red-600 rounded-md 
          w-1/6 p-2 m-2 text-center font-bold flex items-center justify-between'
        >Clean
          <svg xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-fit stroke "
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 
            2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 
            100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clipRule="evenodd" />
          </svg>

        </button>
      </ul>

    </div>
  );
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
        className={({ isActive }) => isActive ? 'border-b-2 font-bold' : undefined}
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
  // flex flex-col content-center items-center justify-center
  // h-s mx-auto my-5 p-6 w-2/5 shadow shadow-[#1a1c22] bg-[#1a1c22]
  // rounded-lg
  return (
    <div
      className=' flex flex-col m-3 p-5 h-full content-center bg-[#1a1c22] rounded-lg shadow shadow-[#1a1c22]

      
    '
    >
      <nav className='my-6 mx-2 w-full border-b'>
        <ul className='flex flex-row items-center justify-between'>
          <li className='m-4 w-full text-center'>
            <NavLink to="/">All</NavLink>
          </li>
          <li className='m-4 w-full text-center'>
            <NavLink to="/active">
              Active
            </NavLink>
          </li>
          <li className='m-4 w-full text-center'>
            <NavLink to="/completed">
              Completed
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className='flex w-full mx-auto my-3 justify-center' >
        <input
          type="text"
          className='
        w-1/2 mx-2 h-10 rounded-md 
        bg-[#1a1c22] border border-[#5fd9fb]
        shadow shadow-[#5fd9fb]
        focus:outline-none focus-within:border-2 p-2
        '
          value={inputValue}
          onChange={handleChange} />
        <button
          className='
        transition-all ease-in-out duration-200
        w-1/6 mx-2 bg-[#5fd9fb] text-[#181a1b] font-bold rounded-md
        hover:bg-[#181a1b] hover:text-[#5fd9fb]
        active:bg-[#2a2c2c] 
        '
          onClick={handleClick} >
          Submit
        </button>
      </div>
      <Routes>
        <Route path="/" element={<All items={toDoList} dispatch={dispatch} />} />
        <Route path="/active" element={<Active items={toDoList} dispatch={dispatch} />} />
        <Route path="/completed" element={<Completed items={toDoList} dispatch={dispatch} />} />
      </Routes>
    </div>
  );
};

App.propTypes = {};
App.defaultProps = {};
export default App;
