import React, {Component} from 'react';


export default class TextField extends Component {


	render() {
		const {
			value, label, onChange, name, type
		} = this.props;


		return (

			<div className="form-group">

				<input
					type={type || "text"}
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