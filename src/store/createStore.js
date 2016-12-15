const store = Redux.createStore(createReducer(), {}, Redux.applyMiddleware(ReduxThunk.default, LoggerMiddleware()));

function createReducer() {
    return Redux.combineReducers({
        inboxReducer: inboxReducer
    });
}
