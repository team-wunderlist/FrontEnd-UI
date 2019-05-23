import React from 'react';
import { connect } from 'react-redux';
import { addTodo, deleteTodo } from '../actions';
import styled from 'styled-components';
import inkpen from '../inkpen.jpg';

const FormToDo = styled.div`
background-image: url(${inkpen});
background-size: cover;
padding: 40px;
width: 19%;
margin-bottom: 25px;
border-radius: 25px;
`;

const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
`;

const Task = styled.input`
border-radius: 20px;
margin-bottom: 10px;
text-align: center;
`;

const Details = styled.input`
border-radius: 20px;
margin-bottom: 10px;
text-align: center;
`;

const Date = styled.input`
border-radius: 20px;
margin-bottom: 10px;
`;

const AddBtn = styled.button`
  border-radius: 20px;
  padding: 5px;
`;

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

        deleteTodo = (event, id) => {
            event.preventDefault();
            this.props.deleteTodo(id);
          }
        

    render() {
        return(
            <FormToDo>
                
                <Form onSubmit= {this.addTodo}>

                    <Task
                        type = 'text'
                        name= 'item'
                        placeholder= 'Task?'
                        value = {this.state.newTodo.item}
                        onChange = {this.handleChanges}
                    />

                    <Details 
                        type = 'text area'
                        name= 'description'
                        placeholder= 'Details?'
                        value = {this.state.newTodo.description}
                        onChange = {this.handleChanges}
                    />

                    <Date 
                        type = 'date'
                        name= 'due_date'
                        placeholder= ''
                        value = {this.state.newTodo.due_date}
                        onChange = {this.handleChanges}
                    />

                    <AddBtn type = 'submit'> Add </AddBtn>
                </Form>

                

            </FormToDo>
        )
    }
}

const mapStateToProps = ({ addingTodo }) => ({
    addingTodo
})


export default connect(mapStateToProps, { addTodo, deleteTodo }) (AddTodoForm);
