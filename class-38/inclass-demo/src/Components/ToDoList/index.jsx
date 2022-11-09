import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getTodos } from '../../store/todo';

const ToDoList = () => {
    // relevant to lab-38
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <>
      <h3>ToDo List</h3>
    </>
  )
};

export default ToDoList;
