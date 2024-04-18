import { call, put, take } from "redux-saga/effects"
// import { GET_USERS_FAILURE, GET_USERS_FETCH, GET_USERS_SUCCESS } from "./constantsRTK"
import { GET_USERS_FAILURE, GET_USERS_FETCH, GET_USERS_SUCCESS } from "./actionsRTK";


function userFetch() {
    return fetch("https://jsonplaceholder.typicode.com/users")
    .then(response =>response.json())
    .then(res=>console.log(res))
}

//generator func
function* getUserFetch() {
try {
    const user = yield call(userFetch);
    yield put(GET_USERS_SUCCESS(user))  //put dispatches this action and payload 
}catch(error) {
    yield put(GET_USERS_FAILURE(error))
}
}

function* mySaga () {
    while(true)
    {
        yield take(GET_USERS_FETCH);  //'take' will sit and listen for the action dispatched to be GET_USER_FETCH
        yield call(getUserFetch);
    }
}

export default mySaga;