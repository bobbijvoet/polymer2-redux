const initialState = {
    items: [{
        subject: 'Message 1',
        body: 'Message 1',
        read: false
    }],
    totalItems: 0
};

function cartReducer(state, action) {
    if (state === undefined) {
        return initialState;
    }

    switch (action.type) {
        case 'ADD_ITEM':
            action.item.read = false;
            return Object.assign({}, state, {
                items: [...state.items, action.item],
                totalItems: state.totalItems + 1,
            });

        default:
            return state
    }
}

