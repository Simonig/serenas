import React from 'react';
import PropTypes from 'prop-types';


const InputField = ({
  value, label, onChange, name, type, onBlur,
}) => (
  <div className="form-group">
    <label htmlFor={label}>
      {label}
    </label>

    <input
      type={type}
      id={label}
      placeholder={label}
      value={value}
      className="form-control"
      step={100}
      name={name}
      onBlur={onBlur}
      onChange={(e) => onChange(e.target)}
    />
  </div>
);


InputField.defaultProps = {
  onChange: () => {},
  onBlur: () => {},
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
  onBlur: PropTypes.func,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default InputField;
