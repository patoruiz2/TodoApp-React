import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({todos, handleDelete, handleToggle}) => {
    return (
        <div>
            {/* componente independiente Todolist, con argumentos (todos, handleDelete, handleToggle) */}
            <ul className="list-group list-group-flush">
                {
                    todos.map((todos,i) =>(
                        //otro componente TodoListItem, con argumentos (todo, index, 
                        //handleDelte, handleToggle --> estos dos pasan por referencia del TodoList y lo ejecutan )
                        <TodoListItem 
                            key= {todos.id}
                            todos = {todos}
                            i = {i}
                            handleDelete = {handleDelete}
                            handleToggle = {handleToggle}
                        />
                    ))
                }
            </ul>
        </div>
    )
}
