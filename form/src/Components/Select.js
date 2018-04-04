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
      options, value, label, onChange, name,
    } = this.props;

    return (
      <div className="form-group">
        <label>{label}</label>

        <select
          className="form-control"
          value={value}
          name={name}
          onChange={(e) => onChange(e.target)}
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
  name: '',
};

Select.propTypes = {
  options: PropTypes.array.isRequired,
  value: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
};

export default Select;
