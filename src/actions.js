import React from "react";
import { INCREMENT, DECREMENT } from "./constants";

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

//Note that to create actions, we use action creators.
// Action creators are functions that create and return action objects.