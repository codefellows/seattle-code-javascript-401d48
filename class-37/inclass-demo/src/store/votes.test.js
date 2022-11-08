import votesReducer  from'./votes';
import {legacy_createStore as createStore, combineReducers } from 'redux';
import { incrementVote, decrementVote, reset } from './votes';

describe('Vote Reducer', () => {
  // combine reducers as in index.js
  const reducers = combineReducers({
    votes: votesReducer,
  });
  // createStore to provide
  const store = createStore(reducers);

  it('delivers initial state', () => {
    // once store is created, we can consume state directly with getState()
    let state = store.getState();

    // console.log(state.votes);
    // notice that state is an object with a votes property
    // votes property create in combineReducers
    expect(state.votes.totalVotes).toEqual(0);
    expect(state.votes.candidates.length).toEqual(3);
    expect(state.votes.candidates[0].name).toEqual('Peter');
    expect(state.votes.candidates[0].votes).toEqual(0);
  });
  it('increments candidate votes', () => {
    let state = store.getState();
    let { candidates } = state.votes;
    // console.log(candidates);
    // I can manually dispatch actions and feed it an actual dispatch function call
    store.dispatch(incrementVote(candidates[2]))
    let newState = store.getState();

    expect(newState.votes.totalVotes).toEqual(1);
    expect(newState.votes.candidates[2].votes).toEqual(1);
  });
  it('decrements candidate votes', () => {
    //clean up after last test
    // also note that the original code smells a bit... 
    // we need logic for no type, since reset doesn't require an action
    store.dispatch(reset({type: 'CURRENTLY-MUST-HAVE-A-TYPE'}));  
    let state = store.getState();
    let { candidates } = state.votes;
    // console.log(candidates);
    // I can manually dispatch actions and feed it an actual dispatch function call
    store.dispatch(decrementVote(candidates[1]))
    let newState = store.getState();
    console.log('should be -1', newState);
    expect(newState.votes.totalVotes).toEqual(-1);
    expect(newState.votes.candidates[1].votes).toEqual(-1);
  })
})
