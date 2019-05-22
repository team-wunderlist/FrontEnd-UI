import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getData } from '../actions';
import AddTodoForm from './AddTodoForm';
import TodoContainer from './TodoContainer';
import { deleteTodo } from '../actions';


class Todos extends React.Component {

    componentDidMount(){
        this.props.getData();
    }
    deleteTodo = (event, id) => {
        event.preventDefault();
        this.props.deleteTodo(id);
      }

    render() {
        if(this.props.fetchingTodos)
        return <h1>...Fetching tasks</h1>

        return (
            <div className = 'tasks-wrapper'>
                <h1>Tasks Page</h1>
                <AddTodoForm />
               {/* <TodoContainer todos = {this.props.todos} deleteTodo = {this.props.deleteTodo} /> */}
               <div>
                {this.props.todos.map( todo => (
                <div>
                    <button className='deleteBtn' type="submit" onClick={(event) => this.props.deleteTodo(event, todo.id)}> X </button>

                    <h4 key = {todo.id}>{todo.item}</h4>
                </div>
            ))}
                </div>
            </div>
        )
        
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos,
        fetchingTodos: state.fetchingTodos
    }
}




export default withRouter( connect(mapStateToProps, { getData, deleteTodo }) (Todos));
