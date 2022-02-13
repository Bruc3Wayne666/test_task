const initialState = {
    current: 1,
    total: 0
}

export const pageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PAGE':
            return {...state, current: action.payload}
        case 'SET_TOTAL':
            return {...state, total: action.payload}
        default:
            return state
    }
}