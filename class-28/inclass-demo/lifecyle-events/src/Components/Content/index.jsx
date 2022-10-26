import { useEffect } from 'react';

const Content = () => {

  // greedy at first, then we'll unmount capability
  // to create functionality on unmount use a return in the callback
  useEffect(() => {

    // this will represent a process that is running
    let intervalId = setInterval(() => {
      console.log('Content Mounted, and running...')
    }, 1000);

    return () => {

      // remember console.log translates to DOING A THING
      console.log('Component Unmounted! not running anymore');
      // this turns off the process so we can see the unmount message
      clearInterval(intervalId);
    }
  });

  return(
    <h2>I AM THE COMPONENT THAT IS RUNNING A PROCESS!!!!</h2>
  )
}

export default Content;
