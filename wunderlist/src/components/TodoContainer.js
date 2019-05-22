import React from 'react'

const TodoContainer= props => {
    return (
        <div>
            {props.todos.map( todo => (
                <div>
                    <h4 key = {todo.id}>{todo.item}</h4>
                </div>
            ))}
        </div>
    )
}

export default TodoContainer;