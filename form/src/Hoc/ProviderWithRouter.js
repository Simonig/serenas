import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import createStore from '../Redux';

const store = createStore();

class ProviderWithRouter extends Component {
  static propTypes = {
    history: PropTypes.object,
    children: PropTypes.element,
  };

  constructor(props) {
    super(props);
    this.store = createStore(store, {
      routerHistory: props.history,
    });
  }

  render() {
    return (
      <Provider store={this.store}>
        {this.props.children}
      </Provider>
    );
  }
}

export default withRouter(ProviderWithRouter);
