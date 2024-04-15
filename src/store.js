import {combineReducers, createStore} from 'redux';
import { INCREMENT, DECREMENT } from './constants';

const initialState = {
    count:0,
    hi:"initial"
}

const reducer = (state=initialState, action) => {
    switch(action.type) 
    {
        case INCREMENT : return {...state,count: state.count+1};
        case DECREMENT : return {...state, count: state.count-1};
        default : return state;
    }
}

// const helloReducer = (state=initialState, action) => {
//     switch(action.type) 
//     {
//         case INCREMENT : return {...state, hi:"hi"};
//         case DECREMENT : return {...state, hi:"bye"};
//         default : return state;
//     }
// }

// const reducer = (state=0, action) => {
//     switch(action.type) 
//     {
//         case INCREMENT : return state+1;
//         case DECREMENT : return state-1;
//         default : return state;
//     }
// }

const rootReducer = combineReducers(
    {
        red : reducer,
        // hello : helloReducer 
    }
)

export const store= createStore(rootReducer);