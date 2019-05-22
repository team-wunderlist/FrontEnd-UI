
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

// import React from 'react'
// import { deleteTodo } from '../actions';
// import { connect } from 'react-redux';

// const TodoContainer= props => {
//     deleteTodo = (event, id) => {
//         event.preventDefault();
//         this.props.deleteTodo(id);
//       }
//     return (
//         <div>
//             {props.todos.map( todo => (
//                 <div>
//                     <button className='deleteBtn' type="submit" onClick={(event) => props.deleteTodo(event, todo.id)}> X </button>

//                     <h4 key = {todo.id}>{todo.item}</h4>
//                 </div>
//             ))}
//         </div>
//     )
// }

// const mapStateToProps = state => {
//     return {
//         todos: state.todos,
//         deleteingTodo: state.deleteingTodo
//     }
// }

// export default connect(mapStateToProps, { deleteTodo }) (Todos));
