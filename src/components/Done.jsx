import React from "react";
import {editTodo} from "../redux/actions/todoActions";
import classes from "../styles/components/Done.module.css";

const Done = ({todo, dispatch}) => {
    const handleDone = () => {
        dispatch(editTodo({...todo, completed: !todo.completed}))
    }

    return (
        <button className={classes.done} onClick={handleDone}>&#10003;</button>
    )
}

export default Done