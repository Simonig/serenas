import React, {Component} from 'react';
import InputField from './InputField';

export default class PersonalData extends Component {

	constructor(props) {
		super(props);

		this.onChange = this.onChange.bind(this);
	}

	onChange(e) {
		this.props.onChange(e, "personal_data")
	}


	render() {
		const {
			address, forename, surname, family_status, birth_date,
			occupation, has_credit_card, has_real_estate, housing_type, main_earner,
			car_owner
		} = this.props.personalData;

		return (
			<div>
				<InputField
					name="forename"
					label="Forename"
					value={forename}
					onChange={this.onChange}
				/>

				<InputField
					name="surname"
					label="Surname"
					value={surname}
					onChange={this.onChange}
				/>


			</div>
		)
	}

}