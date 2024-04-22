import { createSlice } from "@reduxjs/toolkit";

export const inputSliceRTK = createSlice({
    name: "input",
    initialState: {
        inputValue: "",
    },
    reducers : {
        setInputValue: (state, action) => {
        state.inputValue = action.payload;      
        },
    },
    
})

export const {setInputValue} = inputSliceRTK.actions;
export default inputSliceRTK.reducer;