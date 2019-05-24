import axios from 'axios';
import axiosWithAuth from '../axiosWithAuth';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const login = creds => dispatch => {
    dispatch ({ type: LOGIN_START });
    return axios.post('https://backend-wunderlist.herokuapp.com/api/auth/login', creds)
    .then(res => { console.log(res.data);
        localStorage.setItem('token', res.data.token);
        dispatch ({ type: LOGIN_SUCCESS, payload: res.data.token})
    })
}

// Register New User Action Types

export const ADD_USER_START = 'ADD_USER_START';
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';
export const ADD_USER_FAILURE = 'ADD_USER_FAILURE';

// Register New User Action Types

export const addUser = credentials => dispatch => {
    dispatch({ type: ADD_USER_START });
      return  axios
        .post('https://backend-wunderlist.herokuapp.com/api/auth/register', credentials)
        .then(res => {
            dispatch({ type: ADD_USER_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: ADD_USER_FAILURE, payload: 'A user with that username already exists.' })
        })
}

export const FETCHING_START = 'FETHCING_START';
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS';
export const FETCHING_FAILURE = 'FETCHING_FAILURE';

export const getData = () => dispatch => {
    dispatch ({ type: FETCHING_START });
    console.log(localStorage.getItem('token'))
        axios.get('https://backend-wunderlist.herokuapp.com/api/todos', {
            headers: { Authorization: localStorage.getItem('token') }
        })
        .then( res => {
            dispatch ({ type: FETCHING_SUCCESS, payload: res.data, });
        })
        .catch( err => console.log(err));
    }

export const ADDING_TODO_START = 'ADDING_TODO_START';
export const ADDING_TODO_SUCCESS = 'ADDING_TODO_SUCCESS';
export const ADDING_TO_FAILURE = 'ADDING_TODO_FAILURE';

export const addTodo = newTodo => dispatch => {
    dispatch({ type: ADDING_TODO_START });
    axiosWithAuth()
    .post('https://backend-wunderlist.herokuapp.com/api/todos', newTodo)
    .then( res => {
        dispatch ({ type: ADDING_TODO_SUCCESS, payload: res.data })
    })
    .catch( err => console.log(err));
}

const url = 'https://backend-wunderlist.herokuapp.com/api/todos'

export const DELETING_TODO = 'DELETING_TODO';
export const DELETING_TODO_SUCCESS = 'DELETING_TODO_SUCCESS';
export const DELETING_TODO_FAILURE = 'DELETING_TODO_FAILURE';

export const deleteTodo = id => dispatch => {
    dispatch({ type: DELETING_TODO });
    axiosWithAuth()
    .delete(`https://backend-wunderlist.herokuapp.com/api/todos/${id}`)
      .then(res =>  {
          console.log(res)
          dispatch({ type: DELETING_TODO_SUCCESS, payload: res.data })
          axios.get('https://backend-wunderlist.herokuapp.com/api/todos', {
            headers: { Authorization: localStorage.getItem('token') }
        })
        .then( res => {
            dispatch ({ type: FETCHING_SUCCESS, payload: res.data, });
        })
        .catch( err => console.log(err));
        })
      
      .catch(err => console.log(err))
  }

