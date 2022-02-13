import React, {useState} from 'react';
import classes from "../styles/components/Add.module.css";
import {useDispatch} from "react-redux";
import {addTodo} from "../redux/actions/todoActions";

const AddToDo = () => {
    const dispatch = useDispatch()
    const [newTitle, setNewTitle] = useState('')
    const [newTodo, setNewTodo] = useState({
        id: '',
        userId: '',
        title: '',
        completed: false
    })

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(addTodo(newTodo))
        setNewTitle('')
    }

    const handleInput = e => {
        const {name, value} = e.target
        setNewTitle(value)
        setNewTodo({...newTodo, [name]: value, id: Date.now(), userId: Date.now()})
    }

    return (
        <form onSubmit={handleSubmit} className={classes.add}>
            <h3>Add new Task</h3>
            <input className={classes.input} onChange={handleInput} type="text" name='title' value={newTitle}/>
            <button className={classes.button} type='submit'>ADD</button>
        </form>
    );
};

export default AddToDo;