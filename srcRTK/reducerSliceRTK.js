import { createSlice } from "@reduxjs/toolkit";

export const counterSliceRTK = createSlice({
    name: "counter",
    initialState: {
        count :0,
    },
    reducers : {
        increase: (state) => {
        state.count +=  1       //REMEMBER to assign the updated value to state.count (that is state.count+=1 and not just state.count+1)
        },
        decrease: (state) => {
            state.count-=1
        },
    },
    
})

export const {increase, decrease} = counterSliceRTK.actions;
export default counterSliceRTK.reducer;