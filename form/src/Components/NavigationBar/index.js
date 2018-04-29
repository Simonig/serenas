import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavigationBar = ({ location }) => (
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
    <Link
      to="/form/expenses"
      className={`${location.pathname === '/form/expenses' ? 'active' : ''} nav-link`}
    >
      5.Expenses Data
    </Link>
    <Link
      to="/form/employer"
      className={`${location.pathname === '/form/employer' ? 'active' : ''} nav-link`}
    >
      6.Employer Data
    </Link>
    <Link
      to="/form/bank"
      className={`${location.pathname === '/form/bank' ? 'active' : ''} nav-link`}
    >
      6.Bank Data
    </Link>
  </div>

);

NavigationBar.propTypes = {
  location: PropTypes.object,
};

export default NavigationBar;
