import React from 'react';

// create our instance of createContext
// this exists so we can use it to consume provided content
export const ModeContext = React.createContext()

class ModeProvider extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      mode: 'light',
    }
  }

  render(){
    return(
      <ModeContext.Provider value={this.state}>
        {this.props.children}
      </ModeContext.Provider>
    )
  }
}

export default ModeProvider
