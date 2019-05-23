import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/Login'
import Signup from './components/Signup'
import Todos from './components/Todos';
import PrivateRoute from './PrivateRoute';
import styled from 'styled-components';
import img from './background.jpg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  background-image: url(${img});
  color: white;

`;

const Navigation = styled.nav`
  
`;

const LoginTag = styled.a`
  
`;

const SignUpTag = styled.a`
  
`;

const TasksTag = styled.a`
  
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
            <Link to = '/' >Tasks</Link>
          </TasksTag>

        </Navigation>

            <Route exact path = '/' component = {Todos} />
            <Route exact path = '/login' component = {Login}/>
            <Route exact path = '/signup' component = {Signup} />
            {/* <PrivateRoute  /> */}

      </Container>

    </Router>
  );
}

export default App;
