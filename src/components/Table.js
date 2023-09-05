import React from 'react';
import Task from "./Task";
import {useSelector} from "react-redux";

const Table = ({setTodo}) => {
    const todoReducer = useSelector(state => state.todos);

    let i = 0
    return (
        <table className="table text-center">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Completed</th>
                <th scope="col">Priority</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
            </tr>
            </thead>
            <tbody>
            {
                todoReducer.map(todo => {
                    i +=1
                    return (
                        <Task setTodo={setTodo} todo={todo} i={i}/>
                    )
                })
            }
            </tbody>
        </table>
    );
};

export default Table;