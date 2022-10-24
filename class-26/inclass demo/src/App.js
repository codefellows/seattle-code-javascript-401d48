import React from 'react';
import './App.css';
import Header from './Components/Header';
import Content from './Components/Content';
import Article from './Components/Article';


class App extends React.Component {

  changeTitle = (title) => {
    document.title = title;
  }

  render(){
    return (
      <>
      <Header greeting="World" changeTitle={this.changeTitle}/>
      <Content changeTitle={this.changeTitle} />
      <Article />
      </>
    );
  }
}

export default App ;
