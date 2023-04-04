import { createSlice } from '@reduxjs/toolkit' //next js redux toolkit  
export const counterSlice = createSlice({
    name: 'counter',
    initialState: { // []
        value: 10
    },
    reducers: { //  API Call
        increase: state => {
            state.value += 1
        },
        decrease: state => {
            state.value -= 1
        }
    }
})

// case under reducers becomes an action 
export const { increase, decrease } = counterSlice.actions
export default counterSlice.reducer







