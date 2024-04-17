import {combineReducers} from 'redux';
import { reducer, thunkReducer } from './reducer';

 const rootReducer = combineReducers(
    {
        red : reducer,
        thunkR : thunkReducer,
    }
)

export default rootReducer;