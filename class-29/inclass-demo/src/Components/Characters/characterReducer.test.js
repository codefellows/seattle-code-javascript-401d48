import { initialState, characterReducer } from './';

describe('Character Reducer Tests', () => {
  it('adds and removes characters', () => {
    // returns initial state as state, no action being dispatched
    let state = characterReducer(initialState, {});

    expect(state.name).toEqual('Sesame Street Characters');

    state = characterReducer(state, {type: 'ADD', payload: 'test'});
    expect(state.characters.includes('test')).toBeTruthy();

    state = characterReducer(state, {type: 'REMOVE', payload: 'test'});
    expect(state.characters.includes('test')).toBeFalsy();

  });
});
