// const initState = [
//     {
//         id: 1,
//         name: 'Lean Yoga',
//         completed: false,
//         priority: 'Medium'
//     },
//     {
//         id: 2,
//         name: 'Lean Redux',
//         completed: true,
//         priority: 'High'
//     },
//     {
//         id: 3,
//         name: 'Lean Javascript',
//         completed: false,
//         priority: 'Low'
//     }
// ]

// const todoListReducer = (state = initState, action) => {
//     switch (action.type) {
//         case "todoList/addTodo":
//             return [...state, action.payload];

//         default:
//             return state;

//         case 'todoList/toggleTodoStatus':
//             return state.map(todo => todo.id === action.payload ? {
//                 ...todo,
//                 completed: !todo.completed
//             } : todo)
//     }
// };

// export default todoListReducer;

import { createSlice } from '@reduxjs/toolkit'

export default createSlice({
    name: 'todoList',
    initialState: [
        {
            id: 1,
            name: 'Lean Yoga',
            completed: false,
            priority: 'Medium'
        },
        {
            id: 2,
            name: 'Lean Redux',
            completed: true,
            priority: 'High'
        },
        {
            id: 3,
            name: 'Lean Javascript',
            completed: false,
            priority: 'Low'
        }
    ],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload)
        },
        toggleTodoStatus: (state, action) => {
            const currentTodo = state.find(todo => todo.id === action.payload)
            if (currentTodo) {

                currentTodo.completed = !currentTodo.completed
            }
        }
    }
})