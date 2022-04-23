//Acciones de una aplicacion - logica de la manipulacion
export const reducer = (state, action) => {//El reducer → Mapa de procedimientos-acciones para realizar CRUD por ej...
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