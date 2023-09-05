import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addTodo, getTodo} from "./redux/action/todoActions";
import Task from "./components/Task";
import FormAdd from "./components/FormAdd";
import Table from "./components/Table";
const App = () => {
    const dispatch = useDispatch();
    const [todo, setTodo] = useState({})

    useEffect(() => {
        dispatch(getTodo())
    },[])

    const handleDelete = () => {

    }


    return (
        <div className={'container'}>
            <h1>Todo Redux</h1>
            <FormAdd setTodo={setTodo} todo={todo}/>
            <Table setTodo={setTodo}/>
        </div>
    );
};

export default App;