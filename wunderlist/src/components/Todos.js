import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getData } from '../actions';
import AddTodoForm from './AddTodoForm';
import { deleteTodo } from '../actions';
import styled from 'styled-components';
import paper from '../paperbackground.jpg';
import wood from '../woodbackground.jpg';
import colors from '../styles';

/* //Colors
export const tertiaryColor = "#BF533B";
export const secondaryColor = "#F2522E";
export const primaryColor = "#F2522E";
export const lightColor = "#F2F2F2";
export const darkColor = "#262122";

//Other general styles
export const  */

const Taskwrap = styled.div`
margin-top: 2rem;
display: flex;
flex-direction: column;
width: 100vw;
align-items: center;
`;

const ListItems = styled.div`
font-family: Roboto Condensed;
width: 95%;
background-color: ${colors.primaryColor};
color: ${colors.lightColor};
border-radius: 2rem;
min-height: 4rem;
height: 4rem;
display:flex;
align-items: center;
justify-content: flex-start;
margin-bottom: 1rem;
padding: 0.5rem 0;
`;



const Checkbox = styled.div`
display: block;
height:1.2rem;
width:1.2rem;
min-height:1.2rem;
min-width:1.2rem;
background-color: ${colors.lightColor};
margin-left: 1rem;
margin-right: 1.5rem;
`;

const Check = styled.div`
 color: ${colors.darkColor};
`;

const ItemBox = styled.div`
height: 100%;
width: 85%;
display:flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-around;
`;

const Task = styled.h4`
font-size: 1.2rem;
font-weight: normal;
margin: 0 0;
`;

const Description = styled.p`
font-size: 1rem;
height: 0;
width:100%;
overflow: hidden;
margin: 0 0;
`;

const DueDate = styled.span`
font-size: 1rem;
font-weight: 300;
font-style: italic;
`

const ButtonBox = styled.div`
display: flex;
flex-direction: row;
align-items: center;
align-contentt: flex-end;
`;
const Blur = styled.div`
    display:none;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 99;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
`
const NewTaskButton = styled.span`
display:block;
text-align:center;
font-size: 3rem;
font-family: Roboto;
width:100%;
height: 3rem;
vertical-align:middle;
color: ${colors.primaryColor};
`

const Star = styled.div`

`;

const DeleteBtn = styled.button`

`;






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
        return <h1 class="material-icons"> cached </h1>

        return (
            <Taskwrap>
                
            <Blur></Blur>
            <AddTodoForm />
            {this.props.todos.map( todo => (
                <ListItems>
                    <Checkbox>
                    </Checkbox>
                    
                    <ItemBox>
                        <Task key = {todo.id}>{todo.item}</Task>
                        <Description>{todo.description}</Description>
                        <DueDate>{(new Date(todo.due_date)).toLocaleDateString()}</DueDate>
                    </ItemBox>

                 </ListItems>
            ))}
            <NewTaskButton>+</NewTaskButton>
            </Taskwrap>        
        )
        
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos,
        fetchingTodos: state.fetchingTodos,
        error: state.error 
    }
}




export default withRouter( connect(mapStateToProps, { getData, deleteTodo }) (Todos));
