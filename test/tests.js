const expect = chai.expect;

describe('Inbox Reducer', function () {

  let state;

  beforeEach(() => {
    state = inboxReducer();
  });

  it('should set the default state', () => {
    expect(state.items.length).to.equal(4);
  });


  it('should select an item', () => {
    state = inboxReducer(state, {
      type: 'OPEN_ITEM',
      item: {
        id: 1
      }
    });
    expect(state.selectedMessage.id).to.equal(1);
    expect(state.items[0].read).to.equal(true);
  });

  it('should remove an item', () => {
    state = inboxReducer(state, {
      type: 'REMOVE_ITEM',
      item: {
        id: 1
      }
    });
    expect(state.items.length).to.equal(3);
  });

  it('should remove an item', () => {
    state = inboxReducer(state, {
      type: 'OPEN_ITEM',
      item: {
        id: 1
      }
    });
    state = inboxReducer(state, {
      type: 'SET_ITEM_UNREAD',
      item: {
        id: 1
      }
    });
    expect(state.items[0].read).to.equal(false);
  });

});
