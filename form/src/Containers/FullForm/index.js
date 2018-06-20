import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { INITIAL_STATE } from '../../constants';

import PersonalData from '../../Components/PersonalData';
import IncomeData from '../../Components/IncomeData';
import ExpensesData from '../../Components/ExpensesData';
import EmployerData from '../../Components/EmployerData';
import LoanData from '../../Components/LoanData';
import RowButton from '../../Components/RowButton';
import NavigationBar from '../../Components/NavigationBar';
import { formActions } from '../../Redux/FormReducer';
import Summary from '../../Components/Summary';

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

  submitForm = (values) => {
    console.log(values);
    this.props.tryToSend(values);
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
            <Summary />
          </div>
          <div className="col-sm-8 serenas__content">
            <form onSubmit={this.submitForm}>
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
                      contactData={contactData}
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

                    <ExpensesData
                      expensesData={expenses}
                      onChange={this.onChange}
                    />
                    <RowButton to="/form/expenses" text="Continue" />

                  </Fragment>
                </Route>


                <Route path={`${match.path}/employer`}>
                  <Fragment>
                    <EmployerData
                      employerData={employerData}
                      personalData={personalData}
                      bankData={bankData}
                      loanData={loanData}
                      onChange={this.onChange}
                    />

                    <RowButton type="submit" text="Send" />

                  </Fragment>
                </Route>

              </Switch>
            </form>
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

