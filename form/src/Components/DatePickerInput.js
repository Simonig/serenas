import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import 'react-datepicker/dist/react-datepicker.css';

class DatePickerInput extends Component {
  handleChange = (value) => {
    this.props.onChange({
      name: this.props.name,
      value,
    });
  };

  render() {
    const {
      value, label,
    } = this.props;

    return (
      <div className="form-group">
        <label>{label}</label>

        <DatePicker
          dateFormat="DD.MM.YYYY"
          dropdownMode="select"
          selected={value}
          onChange={this.handleChange}
        />

      </div>
    );
  }
}

DatePickerInput.defaultProps = {
  onChange: () => {},
  name: '',
  value: '',
  label: '',
};

DatePickerInput.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
};

export default DatePickerInput;
