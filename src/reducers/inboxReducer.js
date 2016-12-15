const initialState = {
  items: [],
  totalUnread: null,
  selectedMessage: null
};


function inboxReducer(state, action) {
  if (state === undefined) {
    return initialState;
  }

  switch (action.type) {
    case 'FETCH_MESSAGES_LOADING':
      return Object.assign({}, state,
        {
          loading: true
        }
      );

    case 'FETCH_MESSAGES_SUCCESS':
      return Object.assign({}, state,
        {
          loading: false,
          items: action.items,
          totalUnread: action.items.reduce((prev, current) => {
            return prev - current.read;
          }, action.items.length)

        }
      );

    case 'OPEN_MESSAGE':
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
            console.log(item.id, action.item.id);
            return item.id === action.item.id
          }),

          totalUnread: state.items.reduce((prev, current) => {
            return prev - current.read;
          }, state.items.length)

        }
      );

    case 'DELETE_MESSAGE':
      console.log(state);

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

