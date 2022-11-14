let initialState = [
  { name: 'Peter', votes: 0 },
  { name: 'Paul', votes: 0 },
  { name: 'Mary', votes: 0 },
];

function candidatesReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'INCREMENT':
      return state.map(candidate => {
          if (candidate.name === payload.name) {
            return {
              name: candidate.name,
              votes: candidate.votes + 1,
            }
          }
          return candidate;
        });
      
    case 'DECREMENT':
      return state.map(candidate => 
          candidate.name === payload.name ? 
          {name: candidate.name, votes: candidate.votes - 1} : 
          candidate);
      
    case 'RESET':
      return initialState;

    default:
      return state;
  }
}



export default candidatesReducer;
