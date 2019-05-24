import React from 'react';
import { connect } from 'react-redux';
import { addTodo, deleteTodo } from '../actions';
import styled from 'styled-components';
import inkpen from '../inkpen.jpg';
import colors from "../styles"

const FormToDo = styled.div`
display:none;
background: ${colors.backgroundGradient};
width: 80vw;
height: 80vh;
max-height:20rem;
border-radius: 1.5rem;
position: absolute;
top: 50%;
left: 50%;
z-index: 100;
transform: translate(-50%, -50%);
color: ${colors.lightColor};
font-family: Roboto Condensed;
`;
const Headline = styled.h1`
width: 100%;
text-align: center;
font-family: Roboto Condensed;
font-weight: 300;
`
const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
`;

const Task = styled.input`
font-size: 1.2rem;
height: 2.2rem;
width: 90%;
border:none;
margin-bottom: 1rem;
text-align: center;
`;

const Details = styled.input`
font-size: 1.2rem;
height: 2.2rem;
width: 90%;
border:none;
margin-bottom: 1rem;
text-align: center;
`;

const Date = styled.input`
font-size: 1.2rem;
height: 2.2rem;
width: 90%;
border:none;
border-radius: 1.1rem;
margin-bottom: 10px;
text-align: center;
`;

const AddBtn = styled.button`
    position: absolute;
    bottom:5%;
    background: transparent;
    border:none;
    font-size: 2rem;
    font-weight: 200;
    color: ${colors.lightColor};
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
                <Headline>Add Task</Headline>
                <Form onSubmit= {this.addTodo}>

                    <Task
                        type = 'text'
                        name= 'item'
                        placeholder= 'Task'
                        value = {this.state.newTodo.item}
                        onChange = {this.handleChanges}
                    />

                    <Details 
                        type = 'text area'
                        name= 'description'
                        placeholder= 'Details'
                        value = {this.state.newTodo.description}
                        onChange = {this.handleChanges}
                    />

                    <Date 
                        type = 'date'
                        name= 'due_date'
                        placeholder= 'YYYY-MM-DD'
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
