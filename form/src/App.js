import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';

import createStore from './Redux';
import FullForm from './Containers/FullForm';

const store = createStore();

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <FullForm />
        </div>
      </Provider>
    );
  }
}


export default App;
