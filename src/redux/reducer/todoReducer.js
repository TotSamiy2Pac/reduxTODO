import {ADD_TODO, DELETE_TODO, EDIT_TODO, GET_TODOS} from "../types";


const initialState = {
    todos: []
}

export default function todoReducer(state = initialState, action) {
    // console.log(action.payload)
    switch (action.type) {
        case GET_TODOS:
            return {...state, todos: action.payload}
        case ADD_TODO:
            return {...state, todos: [...state.todos, action.payload]}
        case DELETE_TODO:
            return {...state, todos: state.todos.filter(todo => todo.id !== action.payload.id)}
        case EDIT_TODO:
            return {...state, todos: state.todos.map(todo => todo.id === action.payload.id ? action.payload : todo)}
        default:
            return state
    }
}

