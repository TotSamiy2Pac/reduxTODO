import React from 'react';
import {addTodo, editTodo} from "../redux/action/todoActions";
import {useDispatch} from "react-redux";

const FormAdd = ({ setTodo, todo}) => {
    const dispatch = useDispatch()
    const handleAdd = (e) => {
        e.preventDefault()
        if (todo.task){
            if (todo.id){
                console.log(todo)
                dispatch(editTodo(todo))
            }
            else {
                dispatch(addTodo(todo))
            }
        }
        setTodo({})
    }

    return (
        <form onSubmit={handleAdd}>
            <div className={'d-flex gap-3 align-items-end gap-4'}>
                <input
                    className={'input_form'}
                    type="text"
                    placeholder={'TASK ........'}
                    value={todo.task || ''}
                    onChange={event => setTodo({
                        ...todo, task: event.target.value
                    })}
                />
                <div className="chekbox d-flex align-items-center gap-2">
                    <input
                        id={'chekbox'}
                        type="checkbox"
                        checked={todo.statusCheked || false}
                        onChange={event => setTodo({
                            ...todo, statusCheked: event.target.checked
                        })}
                    />
                    <label htmlFor="chekbox">Complited</label>
                </div>
                <button type={"submit"} className={'btn btn-success'}>Submit</button>
            </div>
        </form>
    );
};

export default FormAdd;