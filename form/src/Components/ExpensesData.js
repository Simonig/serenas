import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputField from './InputField';

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
    };
  }

  onChange = (e) => {
    const { name, value } = e;
    this.setState({ [name]: value }, () => {
      this.props.onChange(e, 'expensesData');
    });
  };


  render() {
    const {
      totalExpenses, rentAndMortgage, supportExpenses, insuranceAndSavings, memberships,
      debtExpenses, other,
    } = this.state;

    return (
      <div>
        <h1>Expenses Data</h1>


        <InputField
          name="totalExpenses"
          label="total_expenses"
          value={totalExpenses}
          onChange={this.onChange}
          type="number"
        />
        <InputField
          name="rentAndMortgage"
          label="rent_and_mortgage"
          value={rentAndMortgage}
          onChange={this.onChange}
          type="number"
        />

        <InputField
          name="supportExpenses"
          label="support_expenses"
          value={supportExpenses}
          onChange={this.onChange}
          type="number"
        />

        <InputField
          name="insuranceAndSavings"
          label="insurance_and_savings"
          value={insuranceAndSavings}
          onChange={this.onChange}
          type="number"
        />

        <InputField
          name="memberships"
          label="memberships"
          value={memberships}
          onChange={this.onChange}
          type="number"
        />

        <InputField
          name="debtExpenses"
          label="debt_expenses"
          value={debtExpenses}
          onChange={this.onChange}
          type="number"
        />

        <InputField
          name="other"
          label="other"
          value={other}
          onChange={this.onChange}
          type="number"
        />

      </div>
    );
  }
}

ExpensesData.defaultProps = {
  onChange: () => {},
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
