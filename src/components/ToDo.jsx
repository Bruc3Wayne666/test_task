import React, {useState} from 'react';
import classes from "../styles/components/ToDo.module.css";
import DeleteToDo from "./DeleteToDo";
import Done from "./Done";
import EditToDo from "./EditToDo";
import EditForm from "./EditForm";

const ToDo = ({todo, dispatch}) => {
    const {id, userId, title, completed} = todo
    const [isEditing, setIsEditing] = useState(false)

    return (
        <div className={classes.todo}>
            {
                isEditing
                    ? <EditForm todo={todo} dispatch={dispatch} setIsEditing={setIsEditing}/>
                    : <>
                        <h3 className={`${completed ? classes.done : classes.todoTitle}`}>{title}</h3>
                        <div className={classes.actions}>
                            <EditToDo setIsEditing={setIsEditing}/>
                            <Done todo={todo} dispatch={dispatch}/>
                            <DeleteToDo todo={todo}/>
                        </div>
                    </>
            }
        </div>
    );
};

export default ToDo;