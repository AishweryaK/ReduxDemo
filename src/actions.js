import React from "react";
import { INCREMENT, DECREMENT, FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS } from "./constants";

export const increment = () => {          //so this is my action creater func.
    return {
        type:INCREMENT,
    }
}
export const decrement = () => {
    return {
        type:DECREMENT,
    }
}

// Note that to create actions, we use action creators.
// Action creators are functions that create and return action objects.

export const fetchDataRequest = () => {
    return {
        type: FETCH_DATA_REQUEST
    }
}

export const fetchDataSuccess = (data) => {
    return {
        type:FETCH_DATA_SUCCESS,
        payload: data,
    }
}

export const fetchDataFailure = (error) => {
    return {
        type: FETCH_DATA_FAILURE,
        payload : error.message,
    }
}


export const fetchData = () => {
    return async (dispatch) => {
        try{
        dispatch(fetchDataRequest());
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();

        // console.log(data);
        // const data = JSON.stringify(something);
        console.log("inside thunk")

        dispatch(fetchDataSuccess(data));

        } catch(error)
        {
            dispatch(fetchDataFailure(error));
        }
    }
}

// export const fetchDataTwo = () => {
//     return async (dispatch) => {
//         try{
//         dispatch(fetchDataRequest());
//         const response = await fetch("https://fakestoreapi.com/products");
//         const data = await response.json();
//         // console.log(data);
//         // const data = JSON.stringify(something);
//         console.log("inside thunk2")

//         dispatch(fetchDataSuccess(data));

//         } catch(error)
//         {
//             dispatch(fetchDataFailure(error));
//         }
//     }
// }