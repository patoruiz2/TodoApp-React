import React from 'react';
import { ToDoList } from './ToDoList';

export const Completed = ({ toDos, dispatch }) => {
  return(
    <ToDoList toDos={toDos} dispatch={dispatch}/>
  )
  // const handleCheckChange = (id) => {
  //   dispatch({
  //     type: 'Toggle',
  //     payload: id
  //   });
  // };
  // const deleteTask = (id) => {
  //   dispatch({
  //     type: 'Delete',
  //     payload: id
  //   });
  // };
  // const deleteAll = () => {
  //   console.log(items);
  //   dispatch({
  //     type: 'DeleteAll',
  //     payload: items
  //   });
  // };
  // return (
  //   <ul className='w-full mx-auto my-8'>
  //     {
  //       items.map(({ id, task, completed }, index) => {
  //         if (completed) return (
  //           <li key={id} className='flex flex-row mb-2 justify-between h-full w-full md:mb-3 lg:mb-5 xl:mb-7'>
  //             <input type="checkbox" name={task} id={id} checked disabled
  //               className='h-8 w-8 mx-5 disabled:opacity-40 lg:h-14 lg:w-14'
  //             />
  //             <label className='w-full h-auto opacity-40 line-through font-bold m-auto' >
  //               <span className='align-middle justify-center text-left md:text-lg lg:text-3xl'>
  //                 {task}
  //               </span>
  //             </label>
  //             {/* <input type="checkbox" name={task} id={id} checked={completed} onChange={() => handleCheckChangeCompleted(id)} /> */}
  //             <button onClick={() => deleteTask(id)} className='w-auto h-auto'>
  //               <svg xmlns="http://www.w3.org/2000/svg"
  //                 className="h-5 w-auto stroke md:h-7 lg:h-14 "
  //                 viewBox="0 0 20 20"
  //                 fill="currentColor"
  //               >
  //                 <path
  //                   fillRule="evenodd"
  //                   d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 
  //             2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 
  //             100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
  //                   clipRule="evenodd" />
  //               </svg>
  //             </button>
  //           </li>
  //         )
  //         return (<li key={id}></li>)
  //       })
  //     }
  //     <br />
  //     <hr />
  //     <section className='flex justify-center content-center mt-3'>
  //       <button onClick={deleteAll}
  //         className='border border-red-600 bg-red-600 rounded-md 
  //           w-auto p-2 m-2 text-center font-bold flex items-center md:p-3 xl:p-4'
  //       >
  //         <span className='mx-3 md:text-xl lg:text-3xl xl:text-5xl'>
  //           Clean
  //         </span>
  //         <svg xmlns="http://www.w3.org/2000/svg"
  //           className="h-5 w-auto stroke md:h-7 lg:h-14 xl:h-16 "
  //           viewBox="0 0 20 20"
  //           fill="currentColor"
  //         >
  //           <path
  //             fillRule="evenodd"
  //             d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 
  //             2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 
  //             100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
  //             clipRule="evenodd" />
  //         </svg>
  //       </button>
  //     </section>
  //   </ul>
  // );
};