import { useState, useEffect } from 'react';
import List from './Components/List';
import Content from './Components/Content';
import axios from 'axios';
import './App.css';

function App() {

  const [name, setName] = useState('World');
  const [pokemonList, setPokemonList] = useState([]);
  const [showContent, setShowContent] = useState(false);

  // greedy(a Ryanism) effect occurs EVERY time an event occurs - just a CALLBACK entered as a param
  useEffect(() => {
    // caution!!!  if running ANY kind of mutation, this would be seen as a recursive action 
    console.log('An event occurred!');
  });

  // do a thing ONCE (NOT GREEDY) by adding an empty array as a second param
  // i.e. stock apa data on page as it loads.  use on place of componentDidMount
  useEffect(() => {
    console.log('something happened ONCE when mounted!');
    async function apiCall(){
      let pokemonResults = await axios.get('https://pokeapi.co/api/v2/pokemon');
      console.log(pokemonResults);
      setPokemonList(pokemonResults.data.results)
    }
    apiCall();
  }, []);

  // trigger a an event when state is updated
  useEffect(() => {
    // i.e. we change state, and we want to some processing before rerender.  api call
    console.log('name was updated!');
  }, [name]);

  return (
    <>
      <h1 onClick={() => setName('You')}>Hello {name}</h1>
      <button onClick={() => setShowContent(!showContent)}>Show Content</button>
      <List list={pokemonList} />
      {showContent && <Content />}
    </>
  );
}

export default App;
