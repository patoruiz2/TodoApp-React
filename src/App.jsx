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
    <div className='w-full mx-auto my-8'>
      <ul>
        {
          items.map(({ task, id, active, completed }, index) => (
            <li key={index + 1} className='flex flex-row mb-2 h-full w-full md:mb-3 lg:mb-5 xl:mb-7'>
              <input type="checkbox" name={task} id={id} key={id} checked={!active} onChange={() => handleCheckChange(id)}
                className='h-8 w-8 mx-5 lg:h-14 lg:w-14'
              /> {/* () => handleCheckChange(id) para pasarle un argumento en especifico*/}
              <label htmlFor={id} className={!active ? 'line-through font-bold m-auto w-full h-auto' : undefined}>
                <span className='align-middle justify-center text-left md:text-lg lg:text-3xl'>
                  {task}
                </span>
              </label>
              {/* <input type="checkbox" name={task} id={id} key={id} checked={completed} onChange={() => handleCheckChangeCompleted(id)} /> */}
              <hr />
            </li>
          ))
        }
      </ul>
    </div>
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
    <div className='w-full mx-auto my-8'>
      <ul>
        {
          items.map(({ id, task, active, completed }, index) => {
            if (active) {
              return (
                <li key={index + 1} className='flex flex-row mb-2 h-full w-full md:mb-3 lg:mb-5 xl:mb-7'>
                  <input type="checkbox" name={task} id={id} key={id} checked={!active} onChange={() => handleCheckChange(id)}
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
            }
            return (
              <li>

              </li>
            )
          })
        }
      </ul>
    </div>
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
      <ul>
        {
          items.map(({ id, task, active, completed }, index) => {
            if (completed) return (
              <li key={index + 1} className='flex flex-row mb-2 justify-between h-full w-full md:mb-3 lg:mb-5 xl:mb-7'>
                <input type="checkbox" name={task} id={id} key={id} checked disabled
                  className='h-8 w-8 mx-5 disabled:opacity-40 lg:h-14 lg:w-14'
                />
                <label className='w-full h-auto opacity-40 line-through font-bold m-auto' >
                  <span className='align-middle justify-center text-left md:text-lg lg:text-3xl'>
                    {task}
                  </span>
                </label>
                {/* <input type="checkbox" name={task} id={id} key={id} checked={completed} onChange={() => handleCheckChangeCompleted(id)} /> */}
                <button onClick={() => deleteTask(id)} className='w-auto h-auto'>
                  <svg xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-auto stroke md:h-7 lg:h-14 "
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
              </li>
            )
          })
        }
        <br />
        <hr />
        <section className='flex justify-center content-center mt-3'>
          <button onClick={deleteAll}
            className='border border-red-600 bg-red-600 rounded-md 
            w-auto p-2 m-2 text-center font-bold flex items-center md:p-3 xl:p-4'
          >
            <span className='mx-3 md:text-xl lg:text-3xl xl:text-5xl'>
              Clean
            </span>
            <svg xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-auto stroke md:h-7 lg:h-14 xl:h-16 "
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

        </section>
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
  // flex flex-col content-center items-center justify-center
  // h-s mx-auto my-5 p-6 w-2/5 shadow shadow-[#1a1c22] bg-[#1a1c22]
  // rounded-lg
  return (
    <div
      className=' flex flex-col m-3 p-4 pb-1 h-fit content-center justify-center bg-[#1a1c22] rounded-lg shadow shadow-[#1a1c22]
      sm:m-auto sm:p-6 sm:w-10/12
      lg:p-4 lg:w-3/4'
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
