import React, {Component} from 'react';
import logo from './logo__zpay6d.gif';
import './App.css';
import {initialState} from "./constants";
import PersonalData from "./Components/PersonalData"
import ContactData from "./Components/ContactData"
import IncomeData from "./Components/IncomeData"
import ExpensesData from "./Components/ExpensesData"
import EmployerData from "./Components/EmployerData"
import BankData from "./Components/BankData"
import AmountField from "./Components/AmountField"
import Select from "./Components/Select"

class App extends Component {

	constructor(props) {
		super(props);
		this.state = initialState;


	}

	renderOpts = (fieldName) => {

		return this.state.options[fieldName].map((opt, i) => {
			return (
				<option key={i} value={opt.value}>
					{opt.name}
				</option>
			)
		})
	};


	onChange = (newValue, section) => {
		const newState = Object.assign({}, this.state);

		if (section) {
			newState[section] = Object.assign({}, this.state[section]);
			newState[section][newValue.name] = newValue.value
		}

		else newState[newValue.name] = newValue.value;


		this.setState(newState);
	};

	submitForm = () => {


	};

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


							<Select
								name="duration"
								label="Duration"
								onChange={this.onChange}
								options={this.state.options.duration}
								value={this.state.duration}
							/>
							<Select
								name="collection_day"
								label="Collection Day"
								onChange={this.onChange}
								options={this.state.options.collection_day}
								value={this.state.collection_day}
							/>

							<Select
								name="rsv"
								label="Rsv"
								onChange={this.onChange}
								options={this.state.options.yesNo}
								value={this.state.rsv}
							/>


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
								<label className="form-check-label">Terms and Conditions</label>


							</div>
							<h1>Personal Data</h1>

							<PersonalData
								options={this.state.options}
								personalData={this.state.personal_data}
								onChange={this.onChange}
							/>

							<ContactData
								contactData={this.state.contact_data}
								onChange={this.onChange}
							/>
							<IncomeData
								incomeData={this.state.income}
								onChange={this.onChange}
							/>

							<ExpensesData
								expensesData={this.state.expenses}
								onChange={this.onChange}
							/>

							<EmployerData
								employerData={this.state.employer_data}
								onChange={this.onChange}
							/>

							<BankData
								bankData={this.state.bank_data}
								onChange={this.onChange}
							/>

							<button onClick={this.submitForm} type="button"
									className="btn btn-dark">Send
							</button>

						</div>
					</div>
				</div>
			</div>
		);
	}
}


export default App;
