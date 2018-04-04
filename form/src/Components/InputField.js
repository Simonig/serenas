import React, { Component } from 'react';
import PropTypes from 'prop-types';


class TextField extends Component {
  render() {
    const {
      value, label, onChange, name, type,
    } = this.props;

    return (
      <div className="form-group">

        <input
          type={type}
          id="amount"
          placeholder={label}
          value={value}
          className="form-control"
          step={100}
          name={name}
          onBlur={this.formatAmount}
          onChange={(e) => onChange(e.target)}
        />
      </div>
    );
  }
}

TextField.defaultProps = {
  onChange: () => {},
  label: '',
  type: 'text',
};

TextField.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default TextField;
