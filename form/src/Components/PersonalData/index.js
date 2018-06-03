import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import InputField from '../InputField';
import Select from '../Select';
import DatePickerInput from '../DatePickerInput';
import {
  ADDRESS_OPTIONS,
  FAMILY_STATUS_OPTIONS, HOUSING_TYPE_OPTIONS,
} from '../../constants';


class PersonalData extends Component {
  constructor(props) {
    super(props);

    const {
      address, forename, surname, familyStatus, birthDate, housingType, nationality,
    } = props.personalData;

    const {
      livingSince, streetNumber, zipCode, city,
      mobileTelephone, streetName,
    } = this.props.contactData;


    this.state = {
      address: address || '',
      forename: forename || '',
      surname: surname || '',
      birthDate,
      nationality: nationality || '',
      familyStatus: familyStatus || '',
      city: city || '',
      zipCode: zipCode || '',
      streetNumber: streetNumber || '',
      streetName: streetName || '',
      housingType: housingType || '',
      livingSince: livingSince || '',
      mobileTelephone: mobileTelephone || '',
    };
  }

  onChange = (e, reference = 'personalData') => {
    const { name, value } = e;
    this.setState({ [name]: value }, () => {
      this.props.onChange(this.state, reference);
    });
  };

  onChangeContactData = (e) => {
    this.onChange(e, 'contactData');
  };

  render() {
    const {
      address, forename, surname, familyStatus, housingType, city, zipCode, streetNumber,
      livingSince, streetName, mobileTelephone, birthDate, nationality,
    } = this.state;


    return (
      <Fragment>
        <div className="formContent">
          <Select
            name="address"
            label="Address"
            options={ADDRESS_OPTIONS}
            value={address}
            onChange={this.onChange}
          />
          <InputField
            name="forename"
            label="Vorname"
            value={forename}
            onChange={this.onChange}
          />
          <InputField
            name="surname"
            label="Nachname"
            value={surname}
            onChange={this.onChange}
          />

          <DatePickerInput
            onChange={this.onChange}
            name="birthDate"
            label="Birth Date"
            value={birthDate}
          />

          <InputField
            name="nationality"
            label="nationality"
            value={nationality}
            onChange={this.onChange}
          />


          <Select
            name="familyStatus"
            options={FAMILY_STATUS_OPTIONS}
            value={familyStatus}
            label="family status"
            onChange={this.onChange}
          />

          <InputField
            name="zipCode"
            label="zipCode"
            value={zipCode}
            onChange={this.onChangeContactData}
          />

          <InputField
            name="city"
            label="city"
            value={city}
            onChange={this.onChangeContactData}
          />

          <InputField
            name="streetName"
            label="streetName"
            value={streetName}
            onChange={this.onChangeContactData}
          />
          <InputField
            name="streetNumber"
            label="streetNumber"
            value={streetNumber}
            onChange={this.onChangeContactData}
          />
          <Select
            options={HOUSING_TYPE_OPTIONS}
            name="housingType"
            label="housingType"
            value={housingType}
            onChange={this.onChangeContactData}
          />

          <InputField
            name="livingSince"
            label="livingSince"
            value={livingSince}
            onChange={this.onChangeContactData}
          />

          <InputField
            name="mobileTelephone"
            label="mobileTelephone"
            value={mobileTelephone}
            onChange={this.onChangeContactData}
          />

        </div>
      </Fragment>
    );
  }
}

PersonalData.defaultProps = {
  personalData: {
    address: '',
    forename: '',
    surname: '',
    familyStatus: '',
    birthDate: undefined,
    occupation: '',
    hasCreditCard: '',
    hasEcCard: '',
    hasRealEstate: '',
    housingType: '',
    mainEarner: '',
    carOwner: '',
  },
};

PersonalData.propTypes = {
  onChange: PropTypes.func,
  personalData: PropTypes.object,
  contactData: PropTypes.object,
};

export default PersonalData;
