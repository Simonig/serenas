import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { INITIAL_STATE } from '../../constants';

import PersonalData from '../../Components/PersonalData';
import ContactData from '../../Components/ContactData';
import IncomeData from '../../Components/IncomeData';
import ExpensesData from '../../Components/ExpensesData';
import EmployerData from '../../Components/EmployerData';
import BankData from '../../Components/BankData';
import LoanData from '../../Components/LoanData';
import RowButton from '../../Components/RowButton';
import NavigationBar from '../../Components/NavigationBar';
import { formActions } from '../../Redux/FormReducer';

class FullForm extends Component {
  static propTypes = {
    tryToSend: PropTypes.func,
    match: PropTypes.object,
    location: PropTypes.object,
  };

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
    this.props.tryToSend(this.state);
  };

  render() {
    const {
      personalData, contactData,
      income, expenses, employerData, bankData, ...loanData
    } = this.state;
    const { match, location } = this.props;

    return (
      <Fragment>
        <div className="row serenas__container--row">
          <div className="col-sm-2 offset-sm-1 serenas__sidebar">
            <NavigationBar location={location} />
          </div>
          <div className="col-sm-8 serenas__content">
            <Switch>
              <Route exact path={`${match.path}/`}>
                <Fragment>
                  <LoanData
                    personalData={loanData}
                    onChange={this.onChange}
                  />

                  <RowButton to="/form/personal_data" text="Continue" />

                </Fragment>
              </Route>


              <Route path={`${match.path}/personal_data`}>
                <Fragment>
                  <h1>Personal Data</h1>

                  <PersonalData
                    personalData={personalData}
                    onChange={this.onChange}
                  />
                  <RowButton to="/form/contact" text="Continue" />

                </Fragment>
              </Route>


              <Route path={`${match.path}/contact`}>
                <Fragment>
                  <ContactData
                    contactData={contactData}
                    onChange={this.onChange}
                  />
                  <RowButton to="/form/income" text="Continue" />
                </Fragment>
              </Route>

              <Route path={`${match.path}/income`}>
                <Fragment>
                  <IncomeData
                    incomeData={income}
                    onChange={this.onChange}
                  />
                  <RowButton to="/form/expenses" text="Continue" />

                </Fragment>
              </Route>

              <Route path={`${match.path}/expenses`}>
                <Fragment>
                  <ExpensesData
                    expensesData={expenses}
                    onChange={this.onChange}
                  />
                  <RowButton to="/form/employer" text="Continue" />

                </Fragment>
              </Route>


              <Route path={`${match.path}/employer`}>
                <Fragment>
                  <EmployerData
                    employerData={employerData}
                    onChange={this.onChange}
                  />
                  <RowButton to="/form/bank" text="Continue" />

                </Fragment>
              </Route>

              <Route path={`${match.path}/bank`}>
                <Fragment>
                  <BankData
                    bankData={bankData}
                    onChange={this.onChange}
                  />
                  <RowButton onClick={this.submitForm} text="Send" />

                </Fragment>
              </Route>
            </Switch>
          </div>
        </div>
      </Fragment>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    tryToSend: (formData) => dispatch(formActions.sendRequest(formData)),
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default withConnect(FullForm);

