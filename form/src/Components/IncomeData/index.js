import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import InputField from '../InputField';
import Validation from './validation';

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
      errors: {},
    };
  }

  onChange = (e) => {
    const { name, value } = e;
    this.setState({ [name]: value }, () => {
      this.props.onChange(this.state, 'income');
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
      total, netIncome, childBenefits, other, errors,
    } = this.state;

    return (
      <Fragment>

        <h1>Income Data</h1>
        <div className="formContent">

          <InputField
            type="number"
            name="total"
            label="Total"
            value={total}
            onBlur={this.onBlur}
            onChange={this.onChange}
          />
          <p className="error">{errors.total}</p>

          <InputField
            type="number"
            name="netIncome"
            label="Net Income"
            value={netIncome}
            onBlur={this.onBlur}
            onChange={this.onChange}
          />
          <p className="error">{errors.netIncome}</p>

          <InputField
            type="number"
            name="childBenefits"
            label="Child Benefits"
            value={childBenefits}
            onBlur={this.onBlur}
            onChange={this.onChange}
          />
          <p className="error">{errors.childBenefits}</p>

          <InputField
            type="number"
            name="other"
            label="other"
            value={other}
            onBlur={this.onBlur}
            onChange={this.onChange}
          />
          <p className="error">{errors.other}</p>

        </div>
      </Fragment>
    );
  }
}

IncomeData.defaultProps = {
  onChange: () => {
  },
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
