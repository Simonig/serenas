import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import InputField from '../InputField';
import DatePickerInput from '../DatePickerInput';
import Validation from './validation';

class ContactData extends Component {
  constructor(props) {
    super(props);

    const {
      livingSince, streetName, streetNumber, zipCode, city,
      telephone, mobileTelephone, email,
    } = this.props.contactData;

    this.state = {
      livingSince,
      streetName: streetName || '',
      streetNumber: streetNumber || '',
      zipCode: zipCode || '',
      city: city || '',
      telephone: telephone || '',
      mobileTelephone: mobileTelephone || '',
      email: email || '',
      errors: {},
    };
  }

  onChange = (e) => {
    const { name, value } = e;
    this.setState({ [name]: value }, () => {
      this.props.onChange(this.state, 'contactData');
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
      livingSince, streetName, streetNumber, zipCode, city,
      telephone, mobileTelephone, email, errors,
    } = this.state;

    return (
      <Fragment>
        <h1>Contact Data</h1>
        <div className="formContent">
          <DatePickerInput
            onChange={this.onChange}
            name="livingSince"
            label="Birth Date"
            value={livingSince}
          />
          <p className="error">{errors.livingSince}</p>

          <InputField
            name="streetName"
            label="Street Name"
            value={streetName}
            onBlur={this.onBlur}
            onChange={this.onChange}
          />
          <p className="error">{errors.streetName}</p>

          <InputField
            name="streetNumber"
            label="Street Number"
            value={streetNumber}
            onBlur={this.onBlur}
            onChange={this.onChange}
          />
          <p className="error">{errors.streetNumber}</p>

          <InputField
            name="zipCode"
            label="Zip Code"
            value={zipCode}
            onBlur={this.onBlur}
            onChange={this.onChange}
          />
          <p className="error">{errors.zipCode}</p>

          <InputField
            name="city"
            label="City"
            value={city}
            onBlur={this.onBlur}
            onChange={this.onChange}
          />
          <p className="error">{errors.city}</p>

          <InputField
            name="telephone"
            label="Telephone"
            value={telephone}
            onBlur={this.onBlur}
            onChange={this.onChange}
          />
          <p className="error">{errors.telephone}</p>

          <InputField
            name="mobileTelephone"
            label="Mobile"
            value={mobileTelephone}
            onBlur={this.onBlur}
            onChange={this.onChange}
          />
          <p className="error">{errors.mobileTelephone}</p>

          <InputField
            name="email"
            label="Email"
            value={email}
            onBlur={this.onBlur}
            onChange={this.onChange}
          />
          <p className="error">{errors.email}</p>
        </div>
      </Fragment>
    );
  }
}

ContactData.defaultProps = {
  onChange: () => {
  },
  contactData: {
    living_since: undefined,
    street_name: '',
    street_number: '',
    zip_code: '',
    city: '',
    telephone: '',
    mobile_telephone: '',
    email: '',
  },
};

ContactData.propTypes = {
  onChange: PropTypes.func,
  contactData: PropTypes.object,
};

export default ContactData;
