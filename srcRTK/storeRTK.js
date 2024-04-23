import { configureStore } from "@reduxjs/toolkit";
// import counterSliceRTK  from "./reducerSliceRTK";
import createSagaMiddleware from "@redux-saga/core";
import { rootReducersRTK} from "./rootReducersRTK";
// import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import persistStore from "redux-persist/es/persistStore";
import {
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE,
    persistReducer,
    persistStore
  } from 'redux-persist';

export const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key:"root",
    storage: AsyncStorage,
    //whitelist(persist hoge) and blacklist(persist nahi hoge) added here
    //whitelist:[key1,key2,key3];
}

const persistedReducer = persistReducer(persistConfig, rootReducersRTK)
export const store=configureStore(
    {
        reducer: persistedReducer,
        // middleware: [sagaMiddleware] ,
        middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware({serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    }}).concat(sagaMiddleware),
        

    }
)
export const persistor = persistStore(store);    //function that persists and rehydrates the state.