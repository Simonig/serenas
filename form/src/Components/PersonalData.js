import React, {Component} from 'react';
import InputField from './InputField';
import Select from './Select';
import DatePickerInput from './DatePickerInput';


export default class PersonalData extends Component {

	constructor(props) {
		super(props);
	}

	onChange = (e) => {
		this.props.onChange(e, "personal_data")
	};


	render() {
		const {
			address, forename, surname, family_status, birth_date,
			occupation, has_credit_card, has_ec_card, has_real_estate, housing_type, main_earner,
			car_owner
		} = this.props.personalData;

		const {family_status: familyStatusOpts, occupation: occupationOpts, yesNo, housing_type: housingTypeOpts} = this.props.options;

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

				<Select
					name="has_real_estate"
					label="has_real_estate"
					onChange={this.onChange}
					options={yesNo}
					value={has_real_estate}
				/>

				<Select
					name="housing_type"
					label="housing_type"
					onChange={this.onChange}
					options={housingTypeOpts}
					value={housing_type}
				/>
				<Select
					name="main_earner"
					label="main_earner"
					onChange={this.onChange}
					options={yesNo}
					value={main_earner}
				/>
				<Select
					name="car_owner"
					label="car_owner"
					onChange={this.onChange}
					options={yesNo}
					value={car_owner}
				/>
			</div>
		)
	}

}