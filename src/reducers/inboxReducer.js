const initialState = {
  items: [],
  totalNew: 4,
  selectedMessage: null
};


function inboxReducer(state, action) {
  if (state === undefined) {
    return initialState;
  }

  switch (action.type) {
    case 'FETCH_ITEMS_SUCCESS':
      return Object.assign({}, state,
        {
          items: action.items
        }
      );

    case 'OPEN_ITEM':
      return Object.assign({}, state,
        {
          items: state.items.map(item => {
            item.selected = false;
            if (item.id === action.item.id) {
              item.read = true;
              item.selected = true;
            }
            return item;
          }),

          selectedMessage: _.find(state.items, (item) => {
            return item.id === action.item.id
          }),

          totalNew: state.items.reduce((prev, current) => {
            return prev - current.read;
          }, state.items.length)

        }
      );

    case 'REMOVE_ITEM':
      return Object.assign({}, state, {
        items: state.items.filter(item => {
          return item.id !== action.item.id;
        }),

        selectedMessage: undefined
      });


    default:
      return state
  }
}

