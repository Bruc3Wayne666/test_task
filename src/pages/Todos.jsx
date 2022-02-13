import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getTodos} from "../redux/actions/todoActions";
import loading from "../assets/loading.svg";
import ToDo from "../components/ToDo";
import AddToDo from "../components/AddToDo";
import classes from "../styles/pages/ToDos.module.css"
import Paginator from "../components/Paginator";
import {getPagesCount} from "../utils/paginator";
import axios from "axios";

const Todos = () => {
        const dispatch = useDispatch()
        const limit = 20
        const {todoReducer: todo, pageReducer: page, loadingReducer: isLoading} = useSelector(state => state)

        const change = page => {
            dispatch({type: 'SET_PAGE', payload: page})
        }

        useEffect(() => {
            const getTotal = async () => {
                const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos')
                dispatch({type: 'SET_TOTAL', payload: getPagesCount(data.length, limit)})
            }
            getTotal()
        }, [])

        useEffect(() => {
            const fetchTodos = async () => {
                dispatch(getTodos(limit, page.current))
            }
            fetchTodos()
        }, [dispatch, page])

        return (
            <div className={classes.todosPage}>
                <h1>Todos</h1>
                <AddToDo/>
                {
                    isLoading.loading
                        ? <img src={loading} alt="Loading..."/>
                        : todo.todos.map(todo => (
                            <ToDo key={todo.id} todo={todo} dispatch={dispatch}/>
                        ))
                }
                <Paginator
                    currentPage={page.current}
                    change={change}
                    total={page.total}
                />
            </div>
        );
    }
;

export default Todos;