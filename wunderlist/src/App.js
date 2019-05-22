import React from 'react';
// import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login'
import Signup from './components/Signup'
import Todos from './components/Todos';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to = '/login'>Login</Link>
          </li>
          <li>
            <Link to = '/signup'>Sign Up</Link>
          </li>
          {/* <li>
            <Link to = '/tasks' >Tasks</Link>
          </li> */}
        </ul>
      <Route exact path = '/' component = {Signup} />
      <Route exact path = '/login' component = {Login}/>
      <Route exact path = '/signup' component = {Signup} />
      <PrivateRoute exact path = '/tasks' component = {Todos} />
  
      </div>
    </Router>
  );
}

export default App;
