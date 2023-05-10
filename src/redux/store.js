// import { createStore } from "redux";
// import rootReducer from "./reducer";
// import {composeWithDevTools} from '@redux-devtools/extension'

// const composedEnhancers = composeWithDevTools()

// const store = createStore(rootReducer, composedEnhancers)

// export default store

import {configureStore} from '@reduxjs/toolkit'
import TodosSlice from "../components/TodoList/TodosSlice"
import FiltersSlice from "../components/Filters/FiltersSlice"

const store = configureStore({
    reducer: {
        filters: FiltersSlice.reducer,
        todoList: TodosSlice.reducer,
    }
})

export default store