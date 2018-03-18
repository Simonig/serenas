import React, {Component} from 'react';
import InputField from './InputField';

export default class EmployerData extends Component {

	constructor(props) {
		super(props);

		this.onChange = this.onChange.bind(this);
	}

	onChange(e) {
		this.props.onChange(e, "employer_data")
	}


	render() {
		const {
			company, street, phone, zip, city,
			since, employment_status
		} = this.props.employerData;

		return (
			<div>
				<h1>Employer Data</h1>
				<InputField
					name="company"
					label="Company"
					value={company}
					onChange={this.onChange}
				/>

				<InputField
					name="street"
					label="street"
					value={street}
					onChange={this.onChange}
				/>

				<InputField
					name="phone"
					label="phone"
					value={phone}
					onChange={this.onChange}
				/>

				<InputField
					name="zip"
					label="zip"
					value={zip}
					onChange={this.onChange}
				/>


				<InputField
					name="city"
					label="city"
					value={city}
					onChange={this.onChange}
				/>


				<InputField
					name="employment_status"
					label="employment_status"
					value={employment_status}
					onChange={this.onChange}
				/>


			</div>
		)
	}

}