import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
    name: "filter",
    initialState:"All",
    reducers: {
       addFilter:(state,action)=>{
        return action.payload
       }
    },
});



export const { addFilter} = filterSlice.actions;

export default filterSlice.reducer;