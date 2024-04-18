import { createReducer } from "@reduxjs/toolkit";
import { GET_USERS_FAILURE, GET_USERS_SUCCESS } from "./actionsRTK";

const initialState = {};
const userReducer = createReducer( initialState, 
(builder) => {
    builder.addCase(GET_USERS_SUCCESS, (state, action) => {
        state.user = action.user;
    }).addCase(GET_USERS_FAILURE, (state, action) => {
        state.error = action.error;
    }).addDefaultCase(()=>{})
}
)

export default userReducer;