import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputField from '../InputField';
import DatePickerInput from '../DatePickerInput';


class EmployerData extends Component {
  constructor(props) {
    super(props);

    const {
      company, street, phone, zip, city,
      since, employmentStatus,
    } = props.employerData;

    this.state = {
      company: company || '',
      street: street || '',
      phone: phone || '',
      zip: zip || '',
      city: city || '',
      since,
      employmentStatus: employmentStatus || '',
    };
  }

  onChange = (e) => {
    const { name, value } = e;
    this.setState({ [name]: value }, () => {
      this.props.onChange(this.state, 'employerData');
    });
  };

  render() {
    const {
      company, street, phone, zip, city,
      since, employmentStatus,
    } = this.state;

    return (
      <div>
        <h1>Employer Data</h1>

        <InputField
          name="company"
          label="Company"
          value={company}
          onChange={this.onChange}
        />
        <InputField
          name="street"
          label="street"
          value={street}
          onChange={this.onChange}
        />
        <InputField
          name="phone"
          label="phone"
          value={phone}
          onChange={this.onChange}
        />
        <InputField
          name="zip"
          label="zip"
          value={zip}
          onChange={this.onChange}
        />
        <InputField
          name="city"
          label="city"
          value={city}
          onChange={this.onChange}
        />
        <DatePickerInput
          name="since"
          label="since"
          value={since}
        />
        <InputField
          name="employmentStatus"
          label="employment_status"
          value={employmentStatus}
          onChange={this.onChange}
        />

      </div>
    );
  }
}

EmployerData.defaultProps = {
  onChange: () => {},
  employerData: {
    company: '',
    street: '',
    phone: '',
    zip: '',
    city: '',
    since: undefined,
    employmentStatus: '',
  },
};

EmployerData.propTypes = {
  onChange: PropTypes.func,
  employerData: PropTypes.object,
};

export default EmployerData;
