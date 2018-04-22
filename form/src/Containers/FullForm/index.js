import React, { Component, Fragment } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
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
        <div className="row">
          <div className="col-sm-4">
            <div className="nav flex-column nav-pills" role="tablist">
              <Link
                to="/form"
                className={`${location.pathname === '/form' ? 'active' : ''} nav-link`}
              >
                1.Loan
              </Link>
              <Link
                to="/form/personal_data"
                className={`${location.pathname === '/form/personal_data' ? 'active' : ''} nav-link`}
              >
                2.Personal Data
              </Link>

              <Link
                to="/form/contact"
                className={`${location.pathname === '/form/contact' ? 'active' : ''} nav-link`}
              >
                3.Contact Data
              </Link>

              <Link
                to="/form/income"
                className={`${location.pathname === '/form/income' ? 'active' : ''} nav-link`}
              >
                4.Income Data
              </Link>
            </div>
          </div>
          <div className="col-sm-8 ">
            <Switch>
              <Route exact path={`${match.path}/`}>
                <Fragment>
                  <LoanData
                    personalData={loanData}
                    onChange={this.onChange}
                  />

                  <Link to="/form/personal_data">
                    <button type="button" className="btn btn-dark">
                      Continue
                    </button>
                  </Link>
                </Fragment>
              </Route>


              <Route path={`${match.path}/personal_data`}>
                <Fragment>
                  <h1>Personal Data</h1>

                  <PersonalData
                    personalData={personalData}
                    onChange={this.onChange}
                  />
                  <Link to="/form/contact">
                    <button type="button" className="btn btn-dark">
                      Continue
                    </button>
                  </Link>
                </Fragment>
              </Route>
              <Route path={`${match.path}/contact`}>
                <Fragment>
                  <ContactData
                    contactData={contactData}
                    onChange={this.onChange}
                  />
                  <Link to="/form/expenses">
                    <button type="button" className="btn btn-dark">
                      Continue
                    </button>

                  </Link>
                </Fragment>
              </Route>

              <Route path={`${match.path}/income`}>
                <Fragment>
                  <IncomeData
                    incomeData={income}
                    onChange={this.onChange}
                  />
                  <Link to="/form/expenses">
                    <button type="button" className="btn btn-dark">
                      Continue
                    </button>

                  </Link>
                </Fragment>
              </Route>

              <Route path={`${match.path}/expenses`}>
                <Fragment>
                  <ExpensesData
                    expensesData={expenses}
                    onChange={this.onChange}
                  />
                  <Link to="/form/employer">
                    <button type="button" className="btn btn-dark">
                      Continue
                    </button>

                  </Link>
                </Fragment>
              </Route>


              <Route path={`${match.path}/employer`}>
                <Fragment>
                  <EmployerData
                    employerData={employerData}
                    onChange={this.onChange}
                  />
                  <Link to="/form/bank">
                    <button type="button" className="btn btn-dark">
                      Continue
                    </button>

                  </Link>
                </Fragment>
              </Route>

              <Route path={`${match.path}/bank`}>
                <Fragment>
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
