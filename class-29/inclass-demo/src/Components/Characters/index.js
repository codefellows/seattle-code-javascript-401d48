import { useReducer, useState } from 'react';

export const initialState = {
  name: 'Sesame Street Characters',
  characters: ['Big Bird', 'Mr Aloysius Snuffleupagus', 'Elmo'],
}

export const characterReducer = (state, action) => {
  // action example:  {type: 'ADD', payload: 'character name'}

  switch(action.type){
    case 'ADD':
      return{ ...state, characters: [...state.characters, action.payload]};
    
    case 'REMOVE':
      return { ...state, characters: state.characters.filter(char => char !== action.payload)};

    default:
      return state;
  }
}

const Characters = () => {

  const [state, dispatch] = useReducer(characterReducer, initialState);
  // console.log(state);
  let [input, setInput] = useState('');

  const addCharacter = () => {
    let action = {
      type: 'ADD',
      payload: input,
    }
    dispatch(action);
  }

  const removeCharacter = () => {
    dispatch({type: 'REMOVE', payload: input});
  }

  return(
    <>
    <h1>{state.name}</h1>
    <input onChange={(e) => setInput(e.target.value)}/>
    <button onClick={addCharacter}>Add Character</button>
    <button onClick={removeCharacter}>Remove Character</button>

    <ul>
      {state.characters.map((name, index) => (
        <li key={`char-${index}`}>{name + ' ' + index}</li>
      ))}
    </ul>
    </>
  )
}

export default Characters;



