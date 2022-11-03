import axios from 'axios';
import { useEffect, useState } from 'react'

const List = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    (async () => {

      let response = await axios.get('https://api-js401.herokuapp.com/api/v1/todo');
      let results = response.data.results;
      console.log(results);
      setList(results)
    })();
  }, []);

  return(
    <>
      {list.map((task, index) => (
        <p key={`list-${index}`}>{task.assignee}</p>
      ))}
    </>
  )
}

export default List;
