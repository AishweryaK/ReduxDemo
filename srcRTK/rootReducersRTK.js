import { combineReducers } from "redux";
import  inputSliceRTK  from "./InputSliceRTK";
import  counterSliceRTK  from "./reducerSliceRTK";
import userReducer from "./userReducerSliceRTK";

export const rootReducersRTK = combineReducers({
    counter : counterSliceRTK,
    userR : userReducer,
    inputV : inputSliceRTK,
});