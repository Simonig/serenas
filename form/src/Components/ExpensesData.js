import React, {Component} from 'react';
import InputField from './InputField';
import DatePickerInput from './DatePickerInput';

export default class ExpensesData extends Component {

	constructor(props) {
		super(props);
	}

	onChange = (e) => {
		this.props.onChange(e, "expenses_data")
	};


	render() {
		const {
			total_expenses, rent_and_mortgage, support_expenses, insurance_and_savings, memberships,
			debt_expenses, other
		} = this.props.expensesData;

		return (
			<div>
				<h1>Expenses Data</h1>


				<InputField
					name="total_expenses"
					label="total_expenses"
					value={total_expenses}
					onChange={this.onChange}
					type="number"
				/>
				<InputField
					name="rent_and_mortgage"
					label="rent_and_mortgage"
					value={rent_and_mortgage}
					onChange={this.onChange}
					type="number"
				/>

				<InputField
					name="support_expenses"
					label="support_expenses"
					value={support_expenses}
					onChange={this.onChange}
					type="number"
				/>

				<InputField
					name="insurance_and_savings"
					label="insurance_and_savings"
					value={insurance_and_savings}
					onChange={this.onChange}
					type="number"
				/>

				<InputField
					name="memberships"
					label="memberships"
					value={memberships}
					onChange={this.onChange}
					type="number"
				/>

				<InputField
					name="debt_expenses"
					label="debt_expenses"
					value={debt_expenses}
					onChange={this.onChange}
					type="number"
				/>


				<InputField
					name="other"
					label="other"
					value={other}
					onChange={this.onChange}
					type="number"
				/>




			</div>
		)
	}

}