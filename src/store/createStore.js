const store = Redux.createStore(createReducer(), {}, Redux.applyMiddleware(ReduxThunk.default));

function createReducer() {
    return Redux.combineReducers({
        inboxReducer: inboxReducer
    });
}
