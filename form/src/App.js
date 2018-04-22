import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import './App.scss';
import images from './Images';
import ProviderWithRouter from './Hoc/ProviderWithRouter';

import FullForm from './Containers/FullForm';
import SuccessPage from './Containers/Success';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <Router>
        <ProviderWithRouter>
          <div className="App">
            <ul className="nav">
              <li>
                <img
                  className="nav-item"
                  src={images.logo}
                  alt="Serena's"
                />
              </li>
            </ul>
            <div className="container">
              <Route path="/">
                <Redirect to="/form" />
              </Route>
              <Route path="/form" component={FullForm} />
              <Route path="/success" component={SuccessPage} />
            </div>
          </div>

        </ProviderWithRouter>
      </Router>

    );
  }
}


export default App;
