import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {IconButton} from "@mui/material";
import {useDispatch} from "react-redux";
import {deleteTodo, editTodo} from "../redux/action/todoActions";

const Task = ({todo, i, setTodo}) => {

    const dispatch = useDispatch();
    const handleEdit = () => {
        setTodo(todo)
    }

    const handleDelete = () => {
        dispatch(deleteTodo(todo))
    }

    return (
        <tr key={todo.id}>
            <th scope="row">{i}</th>
            <td>{todo.task}</td>
            <td>
                <input
                    type="checkbox"
                    checked={todo.statusCheked}
                    // readOnly={false}
                    // disabled={true}
                />
            </td>
            <td>{todo.status}</td>
            <td>
                <IconButton
                    aria-label="edit"
                    size="large"
                    onClick={handleEdit}
                >
                    <EditIcon fontSize="inherit" />
                </IconButton>
            </td>
            <td>
                <IconButton
                    onClick={handleDelete}
                    aria-label="delete"
                    size="large"
                >
                    <DeleteIcon fontSize="inherit" />
                </IconButton>
            </td>
        </tr>
    );
};

export default Task;