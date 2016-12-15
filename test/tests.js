const expect = chai.expect;

describe('Inbox Reducer', function () {

  let state;

  beforeEach(() => {
    state = inboxReducer();
  });

  it('should set the default state', () => {
    expect(state.items.length).to.equal(0);
  });


  it('should fetch items', () => {
    state = inboxReducer(state, {
      type: 'FETCH_MESSAGES_SUCCESS',
      items: [{
        id: 1
      }]
    });
    expect(state.items.length).to.equal(1);
  });

  describe('has fetched items', () => {
    beforeEach(() => {
      state = inboxReducer(state, {
        type: 'FETCH_MESSAGES_SUCCESS',
        items: [{
          id: 1
        }]
      });
    });

    it('should select an item', () => {
      state = inboxReducer(state, {
        type: 'OPEN_MESSAGE',
        item: {
          id: 1
        }
      });
      expect(state.selectedMessage.id).to.equal(1);
    });

    it('should delete an item', () => {
      state = inboxReducer(state, {
        type: 'DELETE_MESSAGE',
        item: {
          id: 1
        }
      });
      console.log(state.items);
      expect(state.items.length).to.equal(0);
    });

    it('should set unread for an item', () => {
      state = inboxReducer(state, {
        type: 'OPEN_MESSAGE',
        item: {
          id: 1
        }
      });
      state = inboxReducer(state, {
        type: 'SET_MESSAGE_UNREAD',
        item: {
          id: 1
        }
      });
      expect(state.items[0].read).to.equal(false);
    });
  })


});
