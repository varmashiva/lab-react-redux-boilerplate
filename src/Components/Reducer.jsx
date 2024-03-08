const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state > 0 ? state - 1 : state; // Simplified decrement logic
    default:
      return state;
  }
};

export default counterReducer; // Correct export statement

  