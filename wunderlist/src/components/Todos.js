import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getData } from '../actions';
import AddTodoForm from './AddTodoForm';
import { deleteTodo } from '../actions';
import styled from 'styled-components';
import paper from '../paperbackground.jpg';
import wood from '../woodbackground.jpg';

const Taskwrap = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${wood});
  border-radius: 25px;
`;

const Headline = styled.h1`

`;

const ListItems = styled.div`
width: 80%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-evenly;
background-image: url(${paper});
border-radius: 25px;
margin-bottom: 25px;
`;



const Checkbox = styled.div`

`;

const Check = styled.div`

`;

const ItemBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

const Task = styled.h4`

`;

const Description = styled.p`

`;

const ButtonBox = styled.div`
display: flex;
flex-direction: row;
align-items: center;
align-contentt: flex-end;
`;

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
                <Headline>Wunderlist 2.0</Headline>
                <AddTodoForm />
<<<<<<< HEAD
            {this.props.todos.map( todo => (
                <ListItems>
=======
               {/* <TodoContainer todos = {this.props.todos} deleteTodo = {this.props.deleteTodo} /> */}
               <div>
                {this.props.todos.map( todo => (
                <div>
                    <button className='deleteBtn' type="submit" onClick={(event) => this.props.deleteTodo(event, todo.id)}> X </button>
>>>>>>> master

                    <Checkbox>
                        <Check> <h1 class="material-icons"> done </h1> </Check>
                    </Checkbox>
                    
                    <ItemBox>
                        <Task key = {todo.id}>{todo.item}</Task>
                        <Description>{todo.description}</Description>
                    </ItemBox>

                    <ButtonBox>
                        <Star> <h1 class="material-icons star"> star </h1> </Star>
                        <DeleteBtn  className='deleteBtn' type="submit" onClick={(event) => this.props.deleteTodo(event, todo.id)}> X </DeleteBtn>
                    </ButtonBox>

                 </ListItems>
            ))}
<<<<<<< HEAD

            </Taskwrap>        
=======
                </div>
            </div>
>>>>>>> master
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
