import React, { Component } from 'react';
import SearchBar from './SearchBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

export default App;