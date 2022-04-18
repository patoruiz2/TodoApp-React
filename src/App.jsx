import React, { useContext, useEffect, useReducer, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const App = () => {
  return (
    <>
    <nav>
      <ul className='flex flex-row align-middle justify-between'>
        <li className='m-10'>
          <Link to="/">
            All
          </Link>
        </li>
        <li>
          <Link to="/active">
            Active
          </Link>
        </li>
        <li>
          <Link to="/complete">
            Completed
          </Link>
        </li>
      </ul>
    </nav>
      
      {/* <table className='border-collapse w-screen my-2'>
        <thead>
          <tr className=''>
            <th
              className='
            transition ease-in-out duration-300
            w-1/4 p-2 border-b 
            border-gray-300 
            focus-within:border-b-blue-400 
            focus-within:border-b-4 '
            >
              <a href='#'>
                All
              </a>
            </th>
            <th className='transition ease-in-out duration-300 w-1/4 p-2 border-b border-gray-300 focus-within:border-b-blue-400 focus-within:border-b-4'>
              <a href='#'>
                Active
              </a></th>
            <th className='transition ease-in-out duration-300 w-1/4 p-2 border-b border-gray-300 focus-within:border-b-blue-400 focus-within:border-b-4'>
              <a href='#'>
                Completed
              </a></th>
          </tr>
        </thead>
      </table> */}
    </>
  );
};
App.propTypes = {};
App.defaultProps = {};
export default App;
