import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  renderOpts = (options) => options.map((opt) => (
    <option key={opt.value} value={opt.value}>
      {opt.name}
    </option>
  ));

  render() {
    const {
      options, value, label, onChange, name, onBlur,
    } = this.props;

    return (
      <div className="form-group">
        <label>{label}</label>

        <select
          className="form-control"
          value={value}
          name={name}
          onChange={(e) => onChange(e.target)}
          onBlur={onBlur}
        >
          {this.renderOpts(options)}
        </select>
      </div>
    );
  }
}

Select.defaultProps = {
  value: '',
  label: '',
  onChange: () => {},
  onBlur: () => {},
  name: '',
};

Select.propTypes = {
  options: PropTypes.array.isRequired,
  value: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  name: PropTypes.string,
};

export default Select;
