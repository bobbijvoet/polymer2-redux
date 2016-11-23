const initialState = {
    items: [{
        subject: 'Message 1',
        body: 'Message 1',
        read: false
    }],
    totalItems: 1
};

function cartReducer(state, action) {
    if (state === undefined) {
        return initialState;
    }

    switch (action.type) {
        case 'ADD_ITEM':
            action.item.read = false;
            const items = [...state.items, action.item];

            return Object.assign({}, state, {
                items,
                totalItems: items.length,
            });

        default:
            return state
    }
}

