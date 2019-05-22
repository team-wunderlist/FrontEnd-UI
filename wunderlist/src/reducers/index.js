import {
    LOGIN_START,
    LOGIN_SUCCESS,
    FETCHING_START,
    FETCHING_SUCCESS,
    FETCHING_FAILURE,
    ADDING_TODO_START,
    ADDING_TODO_SUCCESS,
    ADDING_TO_FAILURE
} from '../actions'

const intialState = {
    todos: [],
    loggingIn: false,
    fetchingTodos: false,
    addingTodo: false,
    updatingTodo: false,
    deletingTodo: false,
    token: localStorage.getItem('token')
}

const reducer = (state = intialState, action) => {
    switch(action.type){
        case LOGIN_START: 
        return {
            ...state,
            loggingIn: true,
        };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn:false,
                token: action.payload
            };
        case FETCHING_START:
            return {
                ...state,
                fetchingTodos: true,
                
            };
        case FETCHING_SUCCESS:
            return {
                ...state,
                todos: action.payload,
                fetchingTodos: false,
            };
        case ADDING_TODO_START:
            return{
                ...state,
                addingTodo: true,

            };
        case ADDING_TODO_SUCCESS:
            return {
                ...state,
                addingTodo: false,
                todos: [...state.todos,
                    action.payload
                ],
                test: console.log(action.payload)
                
            }
        default:
            return state;
    }
};

export default reducer;