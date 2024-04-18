// import { GET_USERS_FETCH } from "./constantsRTK";

// export const getUsersFetch = () => {
//     return {
//         type: GET_USERS_FETCH,
//     }
// }

import { createAction } from "@reduxjs/toolkit";

export const GET_USERS_FETCH = createAction("GET_USERS_FETCH");
export const GET_USERS_SUCCESS = createAction("GET_USERS_SUCCESS");
export const GET_USERS_FAILURE = createAction("GET_USERS_FAILURE");