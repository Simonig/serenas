import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const RowButton = ({ to, text, onClick }) => (
  <div className="row-button">

    {to &&
    <Link to={to}>
      <button
        type="button"
        className="btn btn-outline-dark"
      >
        {text}
      </button>
    </Link>

    }

    {onClick &&
    <button
      onClick={onClick}
      type="button"
      className="btn btn-outline-dark"
    >
      {text}
    </button>
    }


  </div>
);

RowButton.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default RowButton;
