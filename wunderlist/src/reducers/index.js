import {
    LOGIN_START,
    LOGIN_SUCCESS
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
        default:
            return state;
    }
};

export default reducer;