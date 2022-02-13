import React from 'react';
import classes from "../styles/components/EditTodo.module.css"

const EditToDo = ({setIsEditing}) => {
    const handleClick = () => {
        setIsEditing(true)
    }

    return (
        <button onClick={handleClick} className={classes.edit}>&#9998;</button>
    );
};

export default EditToDo;