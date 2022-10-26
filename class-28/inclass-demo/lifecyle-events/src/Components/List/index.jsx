const List = ({list}) => {
  // console.log(list);

  return(
    <ul>
      {list.map((pokemon, index) => (<li key={`poke-${index}`}>{pokemon.name}</li>))}
    </ul>
  )
}

export default List;
