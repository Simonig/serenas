import React, { Component } from 'react';
import Cookies from 'js-cookie';

class Summary extends Component {
  componentWillMount = () => {
    this.total = Cookies.get('serenas_total') || 0;
    this.currency = Cookies.get('serenas_currency') || 'EUR';
    this.customer = Cookies.get('serenas_customer') || '';
    this.order = Cookies.get('serenas_order') || '';
  };

  render() {
    return (
      <div className="summary__box">
        <p><strong>Order Nº:</strong> {this.order}</p>
        <p><strong>Name:</strong> {this.customer}</p>
        <p><strong>Total:</strong> {this.total} {this.currency}</p>
      </div>
    );
  }
}

export default Summary;
