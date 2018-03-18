import React, {Component} from 'react';


export default class Select extends Component {

	renderOpts(options) {

		return options.map((opt, i) => {
			return (
				<option key={i} value={opt.value}>
					{opt.name}
				</option>
			)
		})
	}

	render() {
		const {
			options, value, label, onChange, name
		} = this.props;

		return (
			<div className="form-group">
				<label>{label}</label>

				<select className="form-control" value={value}
						name={name}
						onChange={e => onChange(e.target)}>
					{this.renderOpts(options)}

				</select>
			</div>

		)
	}

}