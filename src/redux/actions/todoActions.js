import {createTodo, deleteTodo, fetchTodos, patchTodo} from "../../api/api";
import axios from "axios";

export const TODO_TYPES = {
    GET_TODOS: 'GET_TODOS',
    ADD_TODO: 'ADD_TODO',
    REMOVE_TODO: 'REMOVE_TODO',
    EDIT_TODO: 'EDIT_TODO'
}

export const getTodos = (limit, page) => async dispatch => {
    try {
        dispatch({type: 'SET_LOADING', payload: true})
        const res = await fetchTodos(limit, page)
        dispatch({type: TODO_TYPES.GET_TODOS, payload: res.reverse()})
        dispatch({type: 'SET_LOADING', payload: false})
    } catch (err) {
        console.log(err)
    }
}

export const addTodo = data => async dispatch => {
    try {
        const res = await createTodo(data)
        dispatch({type: TODO_TYPES.ADD_TODO, payload: res})
    } catch (err) {
        console.log(err)
    }
}

export const removeTodo = todo => async dispatch => {
    try {
        await deleteTodo(todo.id)
        dispatch({type: TODO_TYPES.REMOVE_TODO, payload: todo})
    } catch (err) {
        console.log(err)
    }
}

export const editTodo = todo => async dispatch => {
    try {
        const res = await patchTodo(todo)
        dispatch({type: TODO_TYPES.EDIT_TODO, payload: res})
    } catch (err) {
        console.log(err)
    }
}