import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const RowButton = ({
  to, text, onClick, type,
}) => (
  <div className="row-button">
    <div className="row">
      <div className="col-sm-10 offset-sm-1 button-position">

        {to ? (
          <Link to={to}>
            <button
              type={type}
              className="btn btn-outline-dark"
            >
              {text}
            </button>
          </Link>
        ) : (
          <button
            onClick={onClick}
            type={type}
            className="btn btn-outline-dark"
          >
            {text}
          </button>
        )}
      </div>
    </div>

  </div>
);

RowButton.defaultProps = {
  onClick: () => {},
  to: null,
  type: 'button',
};

RowButton.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default RowButton;
