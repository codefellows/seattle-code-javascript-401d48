// formerly named functionMode

import React, { useState } from 'react';

// create our instance of createContext
// this exists so we can use it to consume provided content
export const ModeContext = React.createContext()

function ModeProvider({children}) {

  const [mode, setMode] = useState('light');

 

  return (
    <ModeContext.Provider value={{mode}}>
      {children}
    </ModeContext.Provider>
  )
}

export default ModeProvider
