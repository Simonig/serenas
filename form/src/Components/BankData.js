import React, {Component} from 'react';
import InputField from './InputField';

export default class BankData extends Component {

	constructor(props) {
		super(props);
	}

	onChange = (e) => {
		this.props.onChange(e, "expenses_data")
	};


	render() {
		const {
			bic, iban,
		} = this.props.bankData;

		return (
			<div>
				<h1>Bank Data</h1>


				<InputField
					name="iban"
					label="iban"
					value={iban}
					onChange={this.onChange}
				/>
				<InputField
					name="bic"
					label="bic"
					value={bic}
					onChange={this.onChange}
				/>



			</div>
		)
	}

}