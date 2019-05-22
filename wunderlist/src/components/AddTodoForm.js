import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';



class  AddTodoForm extends React.Component {
    state = {
        newTodo: {
            item: '',
            description: '',
            due_date: ''
        }
    };

    handleChanges = e => {
        this.setState({
            newTodo: {
                ...this.state.newTodo,
                [e.target.name]: e.target.value
            }
        });
    }

    addTodo = e => {
        e.preventDefault();
        this.props.addTodo(this.state.newTodo)
        }

    render() {
        return(
            <div className = 'addTodo-form'>
                <form onSubmit= {this.addTodo}>
                <label for ='item'> Task </label>
                <input 
                    type = 'text'
                    name= 'item'
                    placeholder= 'Task'
                    value = {this.state.newTodo.item}
                    onChange = {this.handleChanges}
                />
                <label for ='due_date'> Due By </label>
                <input 
                    type = 'date'
                    name= 'due_date'
                    placeholder= 'YYYY/MM/DD'
                    value = {this.state.newTodo.due_date}
                    onChange = {this.handleChanges}
                />
                <label for ='description'> Description</label>
                <input 
                    type = 'text area'
                    name= 'description'
                    placeholder= 'Description'
                    value = {this.state.newTodo.description}
                    onChange = {this.handleChanges}
                />

                <button type = 'submit'> Add new Todo </button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = ({ addingTodo }) => ({
    addingTodo
})

export default connect(mapStateToProps, { addTodo }) (AddTodoForm);