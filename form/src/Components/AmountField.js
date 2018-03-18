import React, {Component} from 'react';

export default class AmountField extends Component {

	constructor() {
		super();
		this.formatAmount = this.formatAmount.bind(this)
	}

	formatAmount(e) {
		const {value, name} = e.target;
		const payload = {value, name};

		payload.value = Math.ceil(payload.value / 100) * 100;
		if (payload.value > 25000) payload.value = 25000;
		if (payload.value < 1000) payload.value = 1000;
		this.props.onChange(payload)

	}

	render() {
		const {value, name, label, onChange} = this.props;

		return (

			<div className="form-group">

				<label>Amount</label>

				<input
					type="number"
					id="amount"
					placeholder={label}
					value={value}
					className="form-control"
					step={100}
					name={name}
					onBlur={this.formatAmount}
					onChange={(e) => onChange(e.target)}
				/>
			</div>


		)
	}
}
