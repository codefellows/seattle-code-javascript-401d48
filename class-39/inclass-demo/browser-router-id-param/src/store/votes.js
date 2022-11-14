const initialState = {
  totalVotes: 0
};

function votesReducer(state = initialState, action) {

  switch (action.type) {
    case 'INCREMENT':
      return  {
        totalVotes: state.totalVotes +1
      };

    case 'DECREMENT':
      return {
          totalVotes: state.totalVotes - 1,
      }

    case 'RESET':
      return initialState;

    default:
      return state;
  }
}

export default votesReducer;
