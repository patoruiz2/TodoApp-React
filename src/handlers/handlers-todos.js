export const handlers = {
  handleCheckChange (idToDo, dispatch)  {
    dispatch({
      type: 'Toggle',
      payload: idToDo,
    })
  },
  deleteTask (idToDo, dispatch)  {
    dispatch({
      type: 'Delete',
      payload: idToDo
    });
  },
  deleteAll(dispatch){
    dispatch({
      type: 'DeleteAll',
      payload: null
    });
  },
}