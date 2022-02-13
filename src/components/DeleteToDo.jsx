import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {removeTodo} from "../redux/actions/todoActions";
import classes from "../styles/components/Delete.module.css"

const DeleteToDo = ({todo}) => {
    const dispatch = useDispatch()

    const handleRemove = () => {
        dispatch(removeTodo(todo))
    }

    return (
        <button className={classes.delete} onClick={handleRemove}>
            &times;
        </button>
    );
};

export default DeleteToDo;