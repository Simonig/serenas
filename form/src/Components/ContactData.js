import React, {Component} from 'react';
import InputField from './InputField';

export default class ContactData extends Component {

	constructor(props) {
		super(props);

		this.onChange = this.onChange.bind(this);
	}

	onChange(e) {
		this.props.onChange(e, "contact_data")
	}


	render() {
		const {
			living_since, street_name, street_number, zip_code, city,
			telephone, mobile_telephone, email
		} = this.props.contactData;

		return (
			<div>
				<h1>Contact Data</h1>
				<InputField
					name="street_name"
					label="Street Name"
					value={street_name}
					onChange={this.onChange}
				/>

				<InputField
					name="street_number"
					label="Street Number"
					value={street_number}
					onChange={this.onChange}
				/>

				<InputField
					name="zip_code"
					label="Zip Code"
					value={zip_code}
					onChange={this.onChange}
				/>


				<InputField
					name="city"
					label="City"
					value={city}
					onChange={this.onChange}
				/>

				<InputField
					name="telephone"
					label="Telephone"
					value={telephone}
					onChange={this.onChange}
				/>


				<InputField
					name="mobile_telephone"
					label="Mobile"
					value={mobile_telephone}
					onChange={this.onChange}
				/>

				<InputField
					name="email"
					label="Email"
					value={email}
					onChange={this.onChange}
				/>


			</div>
		)
	}

}