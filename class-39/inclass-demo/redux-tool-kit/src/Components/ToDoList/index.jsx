import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../../store/todo';

const ToDoList = () => {
    // relevant to lab-38
  const dispatch = useDispatch();
  const todoList  = useSelector(state => state.todos.list);

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <>
      <h3>ToDo List</h3>
      <ul>
        {todoList.map((task, index) => (<li key={`task-${index}`}>{task.text}</li>))}
      </ul>
    </>
  )
};

export default ToDoList;
