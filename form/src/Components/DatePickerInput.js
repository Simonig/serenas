import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


export default class DatePickerInput extends Component {

	constructor(props) {
		super(props)

		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(value) {

		this.props.onChange({
			name: this.props.name,
			value
		})

	}


	render() {
		const {
			value, label
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

		)
	}

}