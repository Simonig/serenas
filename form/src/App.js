import React, {Component} from 'react';
import logo from './logo__zpay6d.gif';
import './App.css';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			loan_asked: props.price || 1000,
			duration: 12,
			rsv: false,
			collection_day: 1,
			is_accepted_terms_of_service: false,
			is_accepted_solvency_retrieval: false,
			durationOpts: [
				{value: 12, name: 12},
				{value: 24, name: 24},
				{value: 36, name: 36},
				{value: 48, name: 48},
				{value: 60, name: 60},
			]

		};

		this.onChange = this.onChange.bind(this);
		this.submitForm = this.submitForm.bind(this);
		this.renderOpts = this.renderOpts.bind(this);
	}

	renderOpts() {

		return this.state.durationOpts.map((opt, i) => {
			return (
				<option key={i} value={opt.value}>
					{opt.name}
				</option>
			)
		})
	}


	onChange(newValue) {
		const newState = {};
		newState[newValue.name] = newValue.value;
		this.setState(newState);
	}

	submitForm(){


	}

	render() {
		return (
			<div className="App">

				<div className="jumbotron">
					<img src={logo}
						 alt="Serena's"/>
				</div>
				<div className="container">

					<div className="row">
						<div className="col-sm-8 offset-sm-2">


							<AmountField onChange={this.onChange} name="loan_asked"
										 value={this.state.loan_asked}
										 label="Loan"/>


							<div className="form-group">
								<label>Duration</label>
								<select className="form-control" value={this.state.duration}
										name="duration"
										onChange={e => this.onChange(e.target)}>
									{ this.renderOpts() }
								</select>
							</div>

							<div className="form-group">
								<label>Collection Day</label>

								<select className="form-control" value={this.state.collection_day}
										name="collection_day"
										onChange={e => this.onChange(e.target)}>
									<option value="1">1</option>
									<option value="15">15</option>
								</select>
							</div>

							<div className="form-check">

								<input
									className="form-check-input"
									onClick={e => this.onChange({
										name: e.target.name,
										value: !this.state.is_accepted_terms_of_service
									})}
									name="is_accepted_terms_of_service"
									value={this.state.is_accepted_terms_of_service}
									type="checkbox"
								/>
								<label className="form-check-label" >Terms and Conditions</label>



							</div>

							<button onClick={this.submitForm} type="button" className="btn btn-dark">Send</button>

						</div>
					</div>
				</div>
			</div>
		);
	}
}

class AmountField extends Component {

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


export default App;
