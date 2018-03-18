import React, {Component} from 'react';
import InputField from './InputField';

export default class IncomeData extends Component {

	constructor(props) {
		super(props);

		this.onChange = this.onChange.bind(this);
	}

	onChange(e) {
		this.props.onChange(e, "income")
	}


	render() {
		const {
			total, net_income, child_benefits, other
		} = this.props.incomeData;

		return (
			<div>
				<h1>Income Data</h1>
				<InputField
					type="number"
					name="total"
					label="Total"
					value={total}
					onChange={this.onChange}
				/>

				<InputField
					type="number"
					name="net_income"
					label="Net Income"
					value={net_income}
					onChange={this.onChange}
				/>

				<InputField
					type="number"
					name="child_benefits"
					label="Child Benefits"
					value={child_benefits}
					onChange={this.onChange}
				/>

				<InputField
					type="number"
					name="other"
					label="other"
					value={other}
					onChange={this.onChange}
				/>

			</div>
		)
	}

}