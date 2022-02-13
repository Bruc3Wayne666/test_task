import {TODO_TYPES} from "../actions/todoActions";

const initialState = {
    todos: []
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case TODO_TYPES.GET_TODOS:
            return {...state, todos: [...action.payload]}
        case TODO_TYPES.ADD_TODO:
            return {...state, todos: [action.payload, ...state.todos]}
        case TODO_TYPES.REMOVE_TODO:
            return {...state, todos: DeleteData(state.todos, action.payload)}
        case TODO_TYPES.EDIT_TODO:
            return {...state, todos: EditData(state.todos, action.payload)}
        default:
            return state
    }
}

const EditData = (data, todo) => {
    return data.map(item => (item.id === todo.id ? todo : item))
}

const DeleteData = (data, todo) => {
    return data.filter(item => item.id !== todo.id)
}