const intialState = {
    todos: '',
    fetchingTodos: false,
    addingTodo: false,
    updatingTodo: false,
    deletingTodo: false,
}

const reducer = (state = intialState, action) => {
    switch(action.type){
        default:
            return state;
    }
};

export default reducer;