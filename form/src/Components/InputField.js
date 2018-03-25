import React, {Component} from 'react';
import PropTypes from 'prop-types';


export default class TextField extends Component {

	static propTypes = {
		value: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.number
		]).isRequired,
		label: PropTypes.string,
		onChange: PropTypes.func.isRequired,
		name: PropTypes.string.isRequired,
		type: PropTypes.string,
	};


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