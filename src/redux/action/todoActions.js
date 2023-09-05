import axios from "axios";
import {ADD_TODO, DELETE_TODO, EDIT_TODO, GET_TODOS} from "../types";


export const getTodo = () => {
    return (dispatch) => {
        axios(`https://64e2ee93bac46e480e77eb43.mockapi.io/todo`)
            .then(res => {
                // console.log(res.data)
                dispatch({type:GET_TODOS, payload: res.data})
            })
    }
}

export const addTodo = (todo) => {
    return (dispatch) => {
        axios.post(`https://64e2ee93bac46e480e77eb43.mockapi.io/todo`, todo)
            .then(res => dispatch({type: ADD_TODO, payload: res.data}))
        }
}

export const deleteTodo  = (todo) => {
    return (dispatch) => {
            axios.delete(`https://64e2ee93bac46e480e77eb43.mockapi.io/todo/${todo.id}`)
            .then(res => dispatch({type: DELETE_TODO, payload: res.data}))
    }
}

export const editTodo = (todo) => {
    return (dispatch) => {
        axios.put(`https://64e2ee93bac46e480e77eb43.mockapi.io/todo/${todo.id}`, todo)
            .then(res => dispatch({type: EDIT_TODO, payload: res.data}))
    }
}