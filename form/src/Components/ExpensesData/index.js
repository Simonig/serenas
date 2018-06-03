import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import InputField from '../InputField';
import Validation from './validation';

class ExpensesData extends Component {
  constructor(props) {
    super(props);

    const {
      totalExpenses, rentAndMortgage, supportExpenses, insuranceAndSavings, memberships,
      debtExpenses, other,
    } = props.expensesData;

    this.state = {
      totalExpenses: totalExpenses || '',
      rentAndMortgage: rentAndMortgage || '',
      supportExpenses: supportExpenses || '',
      insuranceAndSavings: insuranceAndSavings || '',
      memberships: memberships || '',
      debtExpenses: debtExpenses || '',
      other: other || '',
      errors: {},
    };
  }

  onChange = (e) => {
    const { name, value } = e;
    this.setState({ [name]: value }, () => {
      this.props.onChange(e, 'expensesData');
    });
  };

  onBlur = (e) => {
    const { name, value } = e.target;
    const { errors } = this.state;

    console.log(name, value);

    errors[name] = Validation(name, value);

    console.log(errors);
    this.setState({ errors });
  };

  render() {
    const {
      totalExpenses, rentAndMortgage, supportExpenses, insuranceAndSavings, memberships,
      debtExpenses, other, errors,
    } = this.state;

    return (
      <Fragment>
        <br />
        <h1>Expenses Data</h1>
        <div className="formContent">
          <InputField
            name="totalExpenses"
            label="total_expenses"
            value={totalExpenses}
            onBlur={this.onBlur}
            onChange={this.onChange}
            type="number"
          />
          <p className="error">{errors.totalExpenses}</p>

          <InputField
            name="rentAndMortgage"
            label="rent_and_mortgage"
            value={rentAndMortgage}
            onBlur={this.onBlur}
            onChange={this.onChange}
            type="number"
          />
          <p className="error">{errors.rentAndMortgage}</p>

          <InputField
            name="supportExpenses"
            label="support_expenses"
            value={supportExpenses}
            onBlur={this.onBlur}
            onChange={this.onChange}
            type="number"
          />
          <p className="error">{errors.supportExpenses}</p>

          <InputField
            name="insuranceAndSavings"
            label="insurance_and_savings"
            value={insuranceAndSavings}
            onBlur={this.onBlur}
            onChange={this.onChange}
            type="number"
          />
          <p className="error">{errors.insuranceAndSavings}</p>

          <InputField
            name="memberships"
            label="memberships"
            value={memberships}
            onBlur={this.onBlur}
            onChange={this.onChange}
            type="number"
          />
          <p className="error">{errors.memberships}</p>

          <InputField
            name="debtExpenses"
            label="debt_expenses"
            value={debtExpenses}
            onBlur={this.onBlur}
            onChange={this.onChange}
            type="number"
          />
          <p className="error">{errors.debtExpenses}</p>

          <InputField
            name="other"
            label="other"
            value={other}
            onBlur={this.onBlur}
            onChange={this.onChange}
            type="number"
          />
          <p className="error">{errors.other}</p>

        </div>
      </Fragment>
    );
  }
}

ExpensesData.defaultProps = {
  onChange: () => {
  },
  expensesData: {
    totalExpenses: '',
    rentAndMortgage: '',
    supportExpenses: '',
    insuranceAndSavings: '',
    memberships: '',
    debtExpenses: '',
    other: '',
  },
};

ExpensesData.propTypes = {
  onChange: PropTypes.func,
  expensesData: PropTypes.object,
};

export default ExpensesData;
