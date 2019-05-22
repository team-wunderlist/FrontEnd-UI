import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getData } from '../actions';


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
                {this.props.todos.map( todo => (
                    <div className = 'task card' key = {todo.id}>
                        <h4>{todo.item}</h4>
                    </div>
                ))}
            </div>
        )
        
    }
}

const mapStateToProps = ({ todos, fetchingTodos }) => ({
    todos,
    fetchingTodos
})

export default withRouter( connect(mapStateToProps, { getData }) (Todos));