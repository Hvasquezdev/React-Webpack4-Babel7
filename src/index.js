import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class HelloWorld extends React.Component {
  constructor() {
    super();

    this.state = {
      title: 'Hello World From React.Js'
    };
  }

  render() {
    const { title } = this.state;
    return(
      <h1>
        { title }
      </h1>
    );
  }
}

const Element = <HelloWorld />;
const RootElement = document.getElementById("root");
RootElement ? ReactDOM.render(Element, RootElement) : false;