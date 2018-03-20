import React, {Component} from 'react';
import InputField from './InputField';
import Select from './Select';
import DatePickerInput from './DatePickerInput';


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
			occupation, has_credit_card,has_ec_card, has_real_estate, housing_type, main_earner,
			car_owner
		} = this.props.personalData;

		const {family_status: familyStatusOpts, occupation: occupationOpts, yesNo} = this.props.options;

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
				<Select
					name="family_status"
					options={familyStatusOpts}
					value={family_status}
					label="family status"
					onChange={this.onChange}

				/>

				<DatePickerInput
					onChange={this.onChange}
					name="birth_date"
					label="Birth Date"
					value={birth_date}
				/>

				<Select
					name="occupation"
					options={occupationOpts}
					value={occupation}
					label="occupation"
					onChange={this.onChange}

				/>

				<Select
					name="has_credit_card"
					label="has_credit_card"
					onChange={this.onChange}
					options={yesNo}
					value={has_credit_card}
				/>
				<Select
					name="has_ec_card"
					label="has_ec_card"
					onChange={this.onChange}
					options={yesNo}
					value={has_ec_card}
				/>

			</div>
		)
	}

}