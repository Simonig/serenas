import React, { Component } from 'react';
import PropTypes from 'prop-types';


class InputField extends Component {
  render() {
    const {
      value, label, onChange, name, type,
    } = this.props;

    return (
      <div className="form-group">
        <label>
          {label}
        </label>

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

InputField.defaultProps = {
  onChange: () => {},
  label: '',
  type: 'text',
};

InputField.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default InputField;
