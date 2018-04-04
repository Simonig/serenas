import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputField from './InputField';
import Select from './Select';
import DatePickerInput from './DatePickerInput';


class PersonalData extends Component {
  constructor(props) {
    super(props);

    const {
      address, forename, surname, familyStatus, birthDate,
      occupation, hasCreditCard, hasEcCard, hasRealEstate, housingType, mainEarner,
      carOwner,
    } = props.personalData;

    this.state = {
      address: address || '',
      forename: forename || '',
      surname: surname || '',
      familyStatus: familyStatus || '',
      birthDate: birthDate || '',
      occupation: occupation || '',
      hasCreditCard: hasCreditCard || '',
      hasEcCard: hasEcCard || '',
      hasRealEstate: hasRealEstate || '',
      housingType: housingType || '',
      mainEarner: mainEarner || '',
      carOwner: carOwner || '',
    };
  }

  onChange = (e) => {
    const { name, value } = e;
    this.setState({ [name]: value }, () => {
      this.props.onChange(this.state, 'personalData');
    });
  };

  render() {
    const {
      address, forename, surname, familyStatus, birthDate,
      occupation, hasCreditCard, hasEcCard, hasRealEstate, housingType, mainEarner,
      carOwner,
    } = this.state;

    const {
      familyStatus: familyStatusOpts, occupation: occupationOpts, yesNo, housingType: housingTypeOpts,
    } = this.props.options;

    return (
      <div>
        <InputField
          name="forename"
          label="Forename"
          value={forename}
          onChange={this.onChange}
        />
        <InputField
          name="surname"
          label="Surname"
          value={surname}
          onChange={this.onChange}
        />
        <InputField
          name="address"
          label="Address"
          value={address}
          onChange={this.onChange}
        />
        <Select
          name="familyStatus"
          options={familyStatusOpts}
          value={familyStatus}
          label="family status"
          onChange={this.onChange}

        />
        <DatePickerInput
          onChange={this.onChange}
          name="birthDate"
          label="Birth Date"
          value={birthDate}
        />
        <Select
          name="occupation"
          options={occupationOpts}
          value={occupation}
          label="occupation"
          onChange={this.onChange}

        />
        <Select
          name="hasCreditCard"
          label="has_credit_card"
          onChange={this.onChange}
          options={yesNo}
          value={hasCreditCard}
        />
        <Select
          name="hasEcCard"
          label="has_ec_card"
          onChange={this.onChange}
          options={yesNo}
          value={hasEcCard}
        />
        <Select
          name="hasRealEstate"
          label="has_real_estate"
          onChange={this.onChange}
          options={yesNo}
          value={hasRealEstate}
        />
        <Select
          name="housingType"
          label="housing_type"
          onChange={this.onChange}
          options={housingTypeOpts}
          value={housingType}
        />
        <Select
          name="mainEarner"
          label="main_earner"
          onChange={this.onChange}
          options={yesNo}
          value={mainEarner}
        />
        <Select
          name="carOwner"
          label="car_owner"
          onChange={this.onChange}
          options={yesNo}
          value={carOwner}
        />
      </div>
    );
  }
}

PersonalData.defaultProps = {
  onChange: () => {},
  personalData: {
    address: '',
    forename: '',
    surname: '',
    familyStatus: '',
    birthDate: '',
    occupation: '',
    hasCreditCard: '',
    hasEcCard: '',
    hasRealEstate: '',
    housingType: '',
    mainEarner: '',
    carOwner: '',
  },
  options: {
    familyStatus: [],
    occupation: [],
    yesNo: [],
    housingType: [],
  },
};

PersonalData.propTypes = {
  onChange: PropTypes.func,
  personalData: PropTypes.object,
  options: PropTypes.object,
};

export default PersonalData;
