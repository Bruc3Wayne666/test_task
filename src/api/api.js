// https://jsonplaceholder.typicode.com/todos

import axios from "axios";

// const instance = axios.create({
//     baseURL: 'https://jsonplaceholder.typicode.com/todos'
// })

export const fetchTodos = async (limit, page) => {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos', {
        params: {
            _limit: limit,
            _page: page
        }
    })
    return data
}

export const createTodo = async ({id, userId, title, completed = false}) => {
    const {data} = await axios.post('https://jsonplaceholder.typicode.com/todos', {
        id,
        userId,
        title,
        completed
    })
    return data
}

export const deleteTodo = async id => {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
}

export const patchTodo = async ({id, userId, title, completed}) => {
    const {data} = await axios.patch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        id,
        userId,
        title,
        completed
    })
    return data
}