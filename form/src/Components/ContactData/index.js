import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import InputField from '../InputField';
import DatePickerInput from '../DatePickerInput';

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
    };
  }

  onChange = (e) => {
    const { name, value } = e;
    this.setState({ [name]: value }, () => {
      this.props.onChange(this.state, 'contactData');
    });
  };

  render() {
    const {
      livingSince, streetName, streetNumber, zipCode, city,
      telephone, mobileTelephone, email,
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
          <InputField
            name="streetName"
            label="Street Name"
            value={streetName}
            onChange={this.onChange}
          />
          <InputField
            name="streetNumber"
            label="Street Number"
            value={streetNumber}
            onChange={this.onChange}
          />
          <InputField
            name="zipCode"
            label="Zip Code"
            value={zipCode}
            onChange={this.onChange}
          />
          <InputField
            name="city"
            label="City"
            value={city}
            onChange={this.onChange}
          />
          <InputField
            name="telephone"
            label="Telephone"
            value={telephone}
            onChange={this.onChange}
          />
          <InputField
            name="mobileTelephone"
            label="Mobile"
            value={mobileTelephone}
            onChange={this.onChange}
          />
          <InputField
            name="email"
            label="Email"
            value={email}
            onChange={this.onChange}
          />
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
