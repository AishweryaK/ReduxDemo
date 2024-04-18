import { configureStore } from "@reduxjs/toolkit";
// import counterSliceRTK  from "./reducerSliceRTK";
import createSagaMiddleware from "@redux-saga/core";
import { root} from "./rootReducersRTK";

export const sagaMiddleware = createSagaMiddleware();

export const store=configureStore(
    {
        reducer: root,
        // middleware: [sagaMiddleware] ,
        middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware().concat(sagaMiddleware)
        

    }
)