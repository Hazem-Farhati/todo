import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
    name: "todos",
    initialState: [
        { id: 1, title: "todo1", done: false ,details:"first details"},
        { id: 2, title: "todo2", done: false ,details:"second details"},
    ],
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now(),
                title: action.payload.title,
                done: false,
                details: action.payload.details,
            };
            state.push(newTodo);
        },
        toggle: (state, action) => {
            const index = state.findIndex(
                (todo) => todo.id === action.payload.id
            );
            state[index].done = action.payload.done;
        },
        deletTodo :(state, action) =>{
         return  state.filter((todo)=> todo.id !== action.payload.id);
        },

        updateTodo :(state, action) =>{
              return state.map(el=>(el.id===action.payload.id)? action.payload:el)
           },
    },
});



export const { addTodo,
    toggle,
    deletTodo,
    updateTodo,
} = todoSlice.actions;
export default todoSlice.reducer;