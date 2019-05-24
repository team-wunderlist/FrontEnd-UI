import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/Login'
import Signup from './components/Signup'
import Todos from './components/Todos';
import AddTodoForm from './components/AddTodoForm';
import PrivateRoute from './PrivateRoute';
import styled from 'styled-components';
import img from './background.jpg';
import colors from './styles';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  color: white;
  align-items: center;
  justify-content: space-between;
  background: ${colors.backgroundGradient};
  height: 8rem;
`;

const Navigation = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const Headline = styled.h1`
  font-size: 1.5rem;
  font-family: Roboto Condensed;
  font-weight: normal;
  width: 100%;
  text-align: center;
`

const LoginTag = styled.a`
a {
  text-decoration:none;
  color: ${colors.lightColor};
  font-family: Roboto;
}
`;

const SignUpTag = styled.a`
a {
  text-decoration:none;
  color: ${colors.lightColor};
  font-family: Roboto;
}
`;

const TasksTag = styled.a`
  a {
    text-decoration:none;
    color: ${colors.lightColor};
    font-family: Roboto;
  }
`;

const AddTaskTag = styled.a`
  a {
    text-decoration:none;
    color: ${colors.lightColor};
    font-family: Roboto;
  }
`;





function App() {
  return (
    <Router>

      <Container>

        <Navigation>

          <LoginTag>
            <Link to = '/login'>Login</Link>
          </LoginTag>

          <SignUpTag>
            <Link to = '/signup'>Sign Up</Link>
          </SignUpTag>

          <TasksTag>
            <Link to = '/tasks' >Tasks</Link>
          </TasksTag>

          <AddTaskTag>
            <Link to = '/addtask' >Add Tasks</Link>
          </AddTaskTag>

        </Navigation>

        <Headline>Wunderlist.</Headline>

            <Route exact path = '/login' component = {Login}/>
            <Route exact path = '/signup' component = {Signup} />

          
      </Container>
      <PrivateRoute exact path = '/tasks' component = {Todos} />
      <PrivateRoute exact path = '/addtasks' component = {AddTodoForm} />
    </Router>
  );
}

export default App;
