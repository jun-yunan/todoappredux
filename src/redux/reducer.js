// const initState = {
//     filters: {
//         search: '',
//         status: 'All',
//         priority: []
//     },
//     todoList: [
//         {
//             id: 1,
//             name: 'Lean Yoga',
//             completed: false,
//             priority: 'Medium'
//         },
//         {
//             id: 2,
//             name: 'Lean Redux',
//             completed: false,
//             priority: 'High'
//         },
//         {
//             id: 3,
//             name: 'Lean Javascript',
//             completed: false,
//             priority: 'Low'
//         }
//     ]
// }

import {combineReducers} from 'redux'
import todoListReducer from "../components/TodoList/TodosSlice"
import filtersReducer from "../components/Filters/FiltersSlice"

// const rootReducer = (state = {}, action) => {
//     return {
//         filters: filtersReducer(state.filters, action),
//         todoList: todoListReducer(state.todoList, action)
//     }
// }

const rootReducer = combineReducers({
    filters: filtersReducer,
    todoList: todoListReducer
})

export default rootReducer