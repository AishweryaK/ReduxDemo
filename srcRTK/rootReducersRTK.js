import  inputSliceRTK  from "./InputSliceRTK";
import  counterSliceRTK  from "./reducerSliceRTK";
import userReducer from "./userReducerSliceRTK";

export const rootReducersRTK = {
    counter : counterSliceRTK,
    userR : userReducer,
    inputValue : inputSliceRTK,
};