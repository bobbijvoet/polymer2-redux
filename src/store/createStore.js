const store = Redux.createStore(createReducer(), {}, Redux.applyMiddleware());

function createReducer() {
    return Redux.combineReducers({
        cartReducer: cartReducer
    });
}