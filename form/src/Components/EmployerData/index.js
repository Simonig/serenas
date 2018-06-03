import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import InputField from '../InputField';
import DatePickerInput from '../DatePickerInput';
import CheckBox from '../CheckBox';
import Select from '../Select';
import { EMPLOYMENT_STATUS_OPTIONS } from '../../constants';
import Validation from './validation';


class EmployerData extends Component {
  constructor(props) {
    super(props);

    const {
      company, street, phone, zip, city,
      since, employmentStatus,
    } = props.employerData;


    const {
      hasRealEstate,
      carOwner,
      hasEcCard,
      hasCreditCard,
    } = props.personalData;

    const {
      bic, iban,
    } = props.bankData;

    const {
      isAcceptedSolvencyRetrieval, isAcceptedTermsOfService,
    } = props.loanData;

    this.state = {
      company: company || '',
      street: street || '',
      phone: phone || '',
      zip: zip || '',
      city: city || '',
      since,
      employmentStatus: employmentStatus || '',
      hasRealEstate,
      carOwner,
      hasEcCard,
      hasCreditCard,
      bic,
      iban,
      isAcceptedSolvencyRetrieval,
      isAcceptedTermsOfService,
      errors: {},
    };
  }

  onBlur = (e) => {
    const { name, value } = e.target;
    const { errors } = this.state;

    errors[name] = Validation(name, value);

    this.setState({ errors });
  };

  onChange = (e, reference = 'employerData') => {
    const { name, value } = e;
    this.setState({ [name]: value }, () => {
      this.props.onChange(this.state, reference);
    });
  };

  onChangePersonalData = (e) => this.onChange(e, 'personalData');


  render() {
    const {
      company, street, phone, zip, city, since, employmentStatus,
      hasRealEstate, carOwner, hasEcCard, hasCreditCard,
      isAcceptedSolvencyRetrieval, isAcceptedTermsOfService,
      bic, iban, errors,

    } = this.state;

    return (
      <Fragment>
        <h1>Employer Data</h1>
        <div className="formContent">
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
          <Select
            name="employmentStatus"
            label="employment_status"
            value={employmentStatus}
            onChange={this.onChange}
            options={EMPLOYMENT_STATUS_OPTIONS}
          />

          <CheckBox
            name="hasEcCard"
            label="hasEcCard"
            value={hasEcCard}
            onChange={this.onChangePersonalData}
          />

          <CheckBox
            name="hasCreditCard"
            label="hasCreditCard"
            value={hasCreditCard}
            onChange={this.onChangePersonalData}
          />

          <CheckBox
            name="hasRealEstate"
            label="hasRealEstate"
            value={hasRealEstate}
            onChange={this.onChangePersonalData}
          />

          <CheckBox
            name="carOwner"
            label="carOwner"
            value={carOwner}
            onChange={this.onChangePersonalData}
          />


          <br />
          <h3>Bank Information</h3>
          <br />

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
            onBlur={this.onBlur}
          />
          <p className="error">{errors.bic}</p>

          <br />
          <br />

          <div className="form-group form-check">
            <input
              className="form-check-input"
              onClick={(e) => this.onChange({
                name: e.target.name,
                value: !isAcceptedTermsOfService,
              })}
              onBlur={this.onBlur}
              name="isAcceptedTermsOfService"
              defaultChecked={isAcceptedTermsOfService}
              value={isAcceptedTermsOfService}
              type="checkbox"
            />
            <label className="form-check-label">Terms and Conditions</label>
          </div>

          <p className="error">{errors.isAcceptedTermsOfService}</p>


          <div className="form-group form-check">
            <input
              className="form-check-input"
              onClick={(e) => this.onChange({
                name: e.target.name,
                value: !isAcceptedSolvencyRetrieval,
              })}
              onBlur={this.onBlur}
              name="isAcceptedSolvencyRetrieval"
              defaultChecked={isAcceptedSolvencyRetrieval}
              value={isAcceptedSolvencyRetrieval}
              type="checkbox"
            />
            <label className="form-check-label">Accept solvency retrieval</label>
          </div>
          <p className="error">{errors.isAcceptedSolvencyRetrieval}</p>


        </div>
      </Fragment>
    );
  }
}

EmployerData.defaultProps = {
  onChange: () => {
  },
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
  personalData: PropTypes.object,
  bankData: PropTypes.object,
  loanData: PropTypes.object,
};

export default EmployerData;
