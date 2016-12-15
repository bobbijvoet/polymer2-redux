class inboxActions {
  static fetchMessages() {
    store.dispatch((dispatch) => {
      dispatch({
        type: 'FETCH_MESSAGES_LOADING'
      });
      return window.fetch('http://localhost:1337/messages')
        .then((response) => {
          response.json().then(data => {
            dispatch({
              type: 'FETCH_MESSAGES_SUCCESS',
              items: data
            })
          })
        });
    });
  }

  static openMessage(id) {
    store.dispatch({
      type: 'OPEN_MESSAGE',
      item: {
        id
      }
    });
  }

  static deleteMessage(id) {
    store.dispatch({
      type: 'DELETE_MESSAGE',
      item: {
        id
      }
    })
  }
}

