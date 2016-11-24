const initialState = {
    items: [{
        subject: 'Message 1',
        body: 'Message 1',
        read: false,
        id: 1
    }],
    totalItems: 1,
    selected: null
};

var id = 2;


function cartReducer(state, action) {
    if (state === undefined) {
        return initialState;
    }
    switch (action.type) {

        case 'ADD_ITEM':
            action.item.read = false;
            action.item.id = id++;
            return Object.assign({}, state, {
                items: [...state.items, action.item]
            });

        case 'OPEN_ITEM':
            const items = [...state.items];
            const index = items.findIndex((item) => {
                return item.id === action.item.id;
            });
            const item = items[index];
            item.read = true;

            items.splice(index, 1, Object.assign({}, item));

            return Object.assign({}, state, {
                items: items,
                selected: action.item.id
            });

        default:
            return state
    }
}

