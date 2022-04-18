import React, { useState, useContext, useReducer } from 'react';

/****************useContext***************************/
// const themes = {
//   light: {
//     foreground: "#000000",
//     background: "#eeeeee"
//   },
//   dark: {
//     foreground: "#ffffff",
//     background: "#222222"
//   }
// };

// const ThemeContext = React.createContext(themes.dark);

// function App() {
//   return (
//     <ThemeContext.Provider value={themes.dark}>
//       <Toolbar />
//     </ThemeContext.Provider>
//   );
// }

// function Toolbar(props) {
//   return (
//     <div>
//       <ThemedButton />
//     </div>
//   );
// }

// function ThemedButton() {
//   const theme = useContext(ThemeContext);
//   console.log(theme);
//   return (
//     <button style={{ background: theme.background, color: theme.foreground }}>
//       I am styled by theme context!
//     </button>
//   );
// }

/****************Counter con UseState***************************/
// function App() {
//   const [count, setCount] = useState(0)
//   const handleSum = () => {
//     setCount(count + 1);
//   }
//   useEffect(() => {
//     // Update the document title using the browser API
//     document.title = `You clicked ${count} times`;
//     return () => {
//       console.log(count);
//     }
//   });
//   return (
//     <>
//       <p className='text-center text-3xl m-7 font-bold'>
//         You clicked {count} times
//       </p>
//       <div className='text-center'>
//         <button 
//           className='border-solid border-2 border-blue-400 bg-blue-300 rounded-lg p-1 
//           transition ease-in-out delay-15 duration-100 active:bg-blue-600'
//           onClick={handleSum}
//         >
//           ClickMe
//         </button>
//       </div>
//     </>
//   );
// }
//export default App;

/****************Counter con useReducer***************************/
const initialState = {count: 0};

function reducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}

export default Counter;
