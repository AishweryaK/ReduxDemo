import { INCREMENT, DECREMENT, FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS } from './constants';

const initialState = {
    count:0,
    data: [],
    isLoading:false,
    error:null,
}

export const reducer = (state=initialState, action) => {
    switch(action.type) 
    {
        case INCREMENT : return {...state,count: state.count+1};
        case DECREMENT : return {...state, count: state.count-1};
        default : return state;
    }
}

// const reducer = (state=0, action) => {
//     switch(action.type) 
//     {
//         case INCREMENT : return state+1;
//         case DECREMENT : return state-1;
//         default : return state;
//     }
// }

export const thunkReducer = (state= initialState, action) => {
    switch(action.type) 
    {
        case FETCH_DATA_REQUEST:
            return { ...state, isLoading : true, error:null};
        case FETCH_DATA_SUCCESS : 
        return {...state, isLoading:false, data: action.payload};
        case FETCH_DATA_FAILURE: 
        return {...state, isLoading:false, error: action.payload};
        default :
         return state;
    }
}

