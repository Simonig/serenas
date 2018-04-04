import React, { Component } from 'react';

import images from '../../Images';
import { COLLECTION_DAY_OPTIONS, DURATION_OPTIONS, INITIAL_STATE, YES_NO_OPTIONS } from '../../constants';

import PersonalData from '../../Components/PersonalData';
import ContactData from '../../Components/ContactData';
import IncomeData from '../../Components/IncomeData';
import ExpensesData from '../../Components/ExpensesData';
import EmployerData from '../../Components/EmployerData';
import BankData from '../../Components/BankData';
import AmountField from '../../Components/AmountField';
import Select from '../../Components/Select';

class FullForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...INITIAL_STATE,
    };
  }

  onChange = (newValue, section) => {
    const newState = Object.assign({}, this.state);

    if (section) {
      newState[section] = newValue;
    } else {
      newState[newValue.name] = newValue.value;
    }

    this.setState(newState);
  };

  submitForm = () => {
  };

  render() {
    const {
      loanAsked, duration, collectionDay, rsv,
      isAcceptedTermsOfService, personalData, contactData,
      income, expenses, employerData, bankData,
    } = this.state;

    return (
      <div>

        <div className="jumbotron">
          <img
            src={images.logo}
            alt="Serena's"
          />
        </div>

        <div className="container">

          <div className="row">
            <div className="col-sm-8 offset-sm-2">

              <AmountField
                onChange={this.onChange}
                name="loanAsked"
                value={loanAsked}
                label="Loan"
              />
              <Select
                name="duration"
                label="Duration"
                onChange={this.onChange}
                options={DURATION_OPTIONS}
                value={duration}
              />
              <Select
                name="collectionDay"
                label="Collection Day"
                onChange={this.onChange}
                options={COLLECTION_DAY_OPTIONS}
                value={collectionDay}
              />
              <Select
                name="rsv"
                label="Rsv"
                onChange={this.onChange}
                options={YES_NO_OPTIONS}
                value={rsv}
              />


              <div className="form-check">
                <input
                  className="form-check-input"
                  onClick={(e) => this.onChange({
                    name: e.target.name,
                    value: !isAcceptedTermsOfService,
                  })}
                  name="isAcceptedTermsOfService"
                  value={isAcceptedTermsOfService}
                  type="checkbox"
                />
                <label className="form-check-label">Terms and Conditions</label>
              </div>

              <h1>Personal Data</h1>

              <PersonalData
                personalData={personalData}
                onChange={this.onChange}
              />

              <ContactData
                contactData={contactData}
                onChange={this.onChange}
              />
              <IncomeData
                incomeData={income}
                onChange={this.onChange}
              />

              <ExpensesData
                expensesData={expenses}
                onChange={this.onChange}
              />

              <EmployerData
                employerData={employerData}
                onChange={this.onChange}
              />

              <BankData
                bankData={bankData}
                onChange={this.onChange}
              />

              <button
                onClick={this.submitForm}
                type="button"
                className="btn btn-dark"
              >
                Send
              </button>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FullForm;
