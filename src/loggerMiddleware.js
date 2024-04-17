
export const logger = store => next => action => {
    console.log("custom middleware", action.type);
    return next(action);
}



