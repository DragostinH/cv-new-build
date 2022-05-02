import React, { Component } from 'react';
import './App.scss';
import ContactAndName from './components/ContactAndName';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: false,
    }
  }

  handleName = (e) => {
    return <input type="text" name="" id="" />
  }
  render() {
    const { input } = this.state;
    return (
      <div className="App">
        <ContactAndName
          handleName={this.handleName}
          input={input}
        />
      </div>
    );
  }

}

export default App;
