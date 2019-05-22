import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getData } from '../actions';
import AddTodoForm from './AddTodoForm';
import TodoContainer from './TodoContainer';


class Todos extends React.Component {

    componentDidMount(){
        this.props.getData();
    }

    render() {
        if(this.props.fetchingTodos)
        return <h1>...Fetching tasks</h1>
        return (
            <div className = 'tasks-wrapper'>
                <h1>Tasks Page</h1>
                <AddTodoForm />
               <TodoContainer todos = {this.props.todos} />
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

export default withRouter( connect(mapStateToProps, { getData }) (Todos));