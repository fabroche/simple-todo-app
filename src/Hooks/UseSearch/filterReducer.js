export const initialState = {
    all: true,
    pending: false,
    completed: false,
    filteredTodos: []
}

export const actionTypes = {
    all: 'all',
    pending: 'pending',
    completed: 'completed'
}

const reducerObject = (state, payload) => ({
    [actionTypes.all]: {
        ...state,
        all: true,
        pending: false,
        completed: false,
        filteredTodos: payload.todos
    },
    [actionTypes.pending]: {
        ...state,
        all: false,
        pending: true,
        completed: false,
        filteredTodos: payload.todos.filter(todo => !todo.completed)
    },
    [actionTypes.completed]: {
        ...state,
        all: false,
        pending: false,
        completed: true,
        filteredTodos: payload.todos.filter(todo => todo.completed)
    },
})

export function reducer(state, action) {
    return reducerObject(state, action.payload)[action.type] || initialState
}