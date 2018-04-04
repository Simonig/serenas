import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputField from '../InputField';

class IncomeData extends Component {
  constructor(props) {
    super(props);

    const {
      total, netIncome, childBenefits, other,
    } = props.incomeData;

    this.state = {
      total: total || '',
      netIncome: netIncome || '',
      childBenefits: childBenefits || '',
      other: other || '',
    };
  }

  onChange = (e) => {
    const { name, value } = e;
    this.setState({ [name]: value }, () => {
      this.props.onChange(this.state, 'income');
    });
  };


  render() {
    const {
      total, netIncome, childBenefits, other,
    } = this.state;

    return (
      <div>
        <h1>Income Data</h1>
        <InputField
          type="number"
          name="total"
          label="Total"
          value={total}
          onChange={this.onChange}
        />

        <InputField
          type="number"
          name="netIncome"
          label="Net Income"
          value={netIncome}
          onChange={this.onChange}
        />

        <InputField
          type="number"
          name="childBenefits"
          label="Child Benefits"
          value={childBenefits}
          onChange={this.onChange}
        />

        <InputField
          type="number"
          name="other"
          label="other"
          value={other}
          onChange={this.onChange}
        />

      </div>
    );
  }
}

IncomeData.defaultProps = {
  onChange: () => {},
  incomeData: {
    total: '',
    netIncome: '',
    childBenefits: '',
    other: '',
  },
};

IncomeData.propTypes = {
  onChange: PropTypes.func,
  incomeData: PropTypes.object,
};

export default IncomeData;
