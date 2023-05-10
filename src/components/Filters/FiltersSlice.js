// const initState = {
//     search: '',
//     status: 'All',
//     priorities: []
// }

// const filtersReducer = (state = initState, action) => {
//     switch (action.type) {
//         case 'filters/searchFilterChange':
//             return {
//                 ...state,
//                 search: action.payload
//             }

//         case 'filters/statusFilterChange':
//             return {
//                 ...state,
//                 status: action.payload
//             }

//         case 'filters/prioritiesFilterChange':
//             return {
//                 ...state,
//                 priorities: action.payload
//             }

//         default:
//             return state
//     }
// }

// export default filtersReducer


import { createSlice } from '@reduxjs/toolkit'

export const filtersSlice = createSlice({
    name: "filters",
    initialState: {
        search: "",
        status: "All",
        priorities: [],
    },
    reducers: {
        searchFilterChange: () => {

        },
        
    }
});