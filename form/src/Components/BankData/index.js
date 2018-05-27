import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import InputField from '../InputField';
import Validation from './validation';

class BankData extends Component {
  constructor(props) {
    super(props);

    const { bic, iban } = props.bankData;

    this.state = {
      bic: bic || '',
      iban: iban || '',
      errors: {},
    };
  }

  onChange = (e) => {
    const { name, value } = e;

    this.setState({ [name]: value }, () => {
      this.props.onChange(this.state, 'expensesData');
    });
  };

  onBlur = (e) => {
    const { name, value } = e.target;
    const { errors } = this.state;

    errors[name] = Validation(name, value);

    console.log(errors);
    this.setState({ errors });
  };

  render() {
    const {
      bic, iban, errors,
    } = this.state;

    return (
      <Fragment>
        <h1>Bank Data</h1>
        <div className="formContent">
          <InputField
            name="iban"
            label="iban"
            value={iban}
            onChange={this.onChange}
            onBlur={this.onBlur}
          />
          <p className="error">{errors.iban}</p>

          <InputField
            name="bic"
            label="bic"
            value={bic}
            onChange={this.onChange}
          />
          <p className="error">{errors.bic}</p>
        </div>
      </Fragment>
    );
  }
}

BankData.defaultProps = {
  onChange: () => {
  },
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
