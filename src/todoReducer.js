export const todoReducer = (state = [], action) => {
    switch (action.type) {
        case 'add':
            // console.log([...state]);
            // console.log(action);
            // console.log(state);
            return [...state, action.payload];
        // Retorna el state (Object actual con la info actual) y el action.payload
        // que es el nuevo objeto enviado y recien creado
        case 'delete':
            return state.filter(todo => todo.id !== action.payload)
        case 'toggle':
            return state.map(todo =>
                (todo.id === action.payload)
                    ? { ...todo, done: !todo.done }
                    : todo
            )
        case 'toggle-large':
            return state.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                } else {
                    return todo
                }
            })
        default:
            return state;
    }
}