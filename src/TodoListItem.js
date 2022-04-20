import React from 'react'

export const TodoListItem = ({ todos, i, handleDelete, handleToggle }) => {
    return (
        <div>
            <li
                key={todos.id}
                className="list-group-item"
            >
                <p
                    className={`${todos.done && 'complete'}`}
                    onClick={() => handleToggle(todos.id)}
                >
                    {i + 1}. {todos.description}
                </p>
                <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(todos.id)}
                >
                    Borrar
                </button>
            </li>
        </div>
    )
}
