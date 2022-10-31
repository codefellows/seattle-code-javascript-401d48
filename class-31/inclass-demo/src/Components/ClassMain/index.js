import React from 'react';
import { ModeContext } from '../../Context/Mode/classMode';

class ClassMain extends React.Component {

  static contextType = ModeContext;

  render() {
    return (
      <>
        <h3>From the ClassMain mode: {this.context.mode}</h3>
      </>
    );
  }
}

export default ClassMain;
