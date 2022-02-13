import React, {useState} from 'react';
import {editTodo} from "../redux/actions/todoActions";
import classes from "../styles/components/EditForm.module.css";

const EditForm = ({todo, dispatch, setIsEditing}) => {
    const [newTitle, setNewTitle] = useState(todo.title)

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(editTodo({...todo, title: newTitle}))
        setIsEditing(false)
    }

    const handleInput = e => {
        setNewTitle(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit} className={classes.editForm}>
            <input className={classes.input} onChange={handleInput} type="text" name="title" value={newTitle}/>
            <button className={classes.button} type="submit">Confirm</button>
        </form>
    );
};

export default EditForm;