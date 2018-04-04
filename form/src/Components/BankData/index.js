import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputField from '../InputField';

class BankData extends Component {
  constructor(props) {
    super(props);

    const { bic, iban } = props.bankData;

    this.state = {
      bic: bic || '',
      iban: iban || '',
    };
  }

  onChange = (e) => {
    const { name, value } = e;
    this.setState({ [name]: value }, () => {
      this.props.onChange(this.state, 'expensesData');
    });
  };

  render() {
    const {
      bic, iban,
    } = this.state;

    return (
      <div>
        <h1>Bank Data</h1>

        <InputField
          name="iban"
          label="iban"
          value={iban}
          onChange={this.onChange}
        />
        <InputField
          name="bic"
          label="bic"
          value={bic}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

BankData.defaultProps = {
  onChange: () => {},
  bankData: {
    iban: '',
    bic: '',
  },
};

BankData.propTypes = {
  onChange: PropTypes.func,
  bankData: PropTypes.object,
};

export default BankData;
