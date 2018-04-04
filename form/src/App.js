import React, { Component } from 'react';
import './App.css';

import FullForm from './Containers/FullForm';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div className="App">
        <FullForm />
      </div>
    );
  }
}


export default App;
