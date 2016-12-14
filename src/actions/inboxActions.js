class inboxActions {
  static fetchMessages() {
    store.dispatch((dispatch) => {
      return window.fetch('')
        .then((data) => {
          dispatch({
            type: 'FETCH_ITEMS_SUCCESS',
            items: [{
              subject: 'PR from Alice',
              body: 'There\'s a PR on your repo.',
              read: false,
              id: 1
            }, {
              subject: 'Your flight to Zanzibar',
              body: 'Here\'s your ticket.',
              read: false,
              id: 2
            }, {
              subject: 'Meetup',
              body: 'New meetup you might be interested in.',
              read: false,
              id: 3
            }, {
              subject: 'Drinks?',
              body: 'Hey Bob, let\'s catch up.',
              read: false,
              id: 4
            }]
          })
        });
    });
  }

  static openMessage(id) {
    store.dispatch({
      type: 'OPEN_ITEM',
      item: {
        id
      }
    });
  }

  static deleteMessage(id) {
    store.dispatch({
      type: 'REMOVE_ITEM',
      item: {
        id
      }
    })
  }
}

