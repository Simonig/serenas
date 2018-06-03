import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CheckBox extends Component {
  onChange = ({ name }) => {
    this.props.onChange({
      name,
      value: this.props.value ? 0 : 1,
    });
  };

  render() {
    const {
      value, label, name,
    } = this.props;

    return (
      <div className="form-group">

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id={label}
            placeholder={label}
            checked={!!value}
            name={name}
            onChange={(e) => this.onChange(e.target)}
          />
          <label className="form-check-label" htmlFor="defaultCheck1">
            {label}
          </label>
        </div>

      </div>
    );
  }
}


CheckBox.defaultProps = {
  label: '',
};

CheckBox.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.number,
  ]).isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
};

export default CheckBox;
