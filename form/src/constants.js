import moment from 'moment'


export const initialState = {
	loan_asked: 1000,
	duration: 12,
	external_id: "ext_1",
	rsv: false,
	collection_day: 1,
	is_accepted_terms_of_service: false,
	is_accepted_solvency_retrieval: false,
	options: {
		duration: [
			{value: 12, name: 12},
			{value: 24, name: 24},
			{value: 36, name: 36},
			{value: 48, name: 48},
			{value: 60, name: 60},
		],
		occupation: [
			{value: 1, name: "Vorstand/Geschäftsführer"},
			{value: 2, name: "leitender Angestellter"},
			{value: 3, name: "Angestellter"},
			{value: 4, name: "Beamter im gehobenen Dienst"},
			{value: 5, name: "Beamter im höheren Dienst"},
			{value: 6, name: "Beamter im mittleren Dienst"},
			{value: 7, name: "Beamter im einfachen Dienst"},
			{value: 8, name: "Zeitsoldat"},
			{value: 9, name: "Berufssoldat"},
			{value: 10, name: "Meister"},
			{value: 11, name: "Selbstständig"},
			{value: 12, name: "Facharbeiter"},
			{value: 13, name: "Arbeiter"},
			{value: 14, name: "Student"},
			{value: 15, name: "Schüler"},
			{value: 16, name: "Auszubildender"},
			{value: 17, name: "Grundwehr-/Zivildienstleistender"},
			{value: 18, name: "Hausfrau/-mann"},
			{value: 19, name: "Rentner/Pensionär"},
			{value: 20, name: "ohne Beschäftigung"},
			{value: 21, name: "(keine Angabe/sonstiges)"},
		],
		yesNo: [
			{value: 0, name: "nein"},
			{value: 1, name: "ja"},
		],
		housing_type: [
			{value: 1, name: "Eigentum"},
			{value: 2, name: "Miete"},
			{value: 3, name: "bei den Eltern"},
		],
		family_status: [
			{value: 1, name: "ledig"},
			{value: 2, name: "verheiratet"},
			{value: 3, name: "verwitwet"},
			{value: 4, name: "geschieden"},
			{value: 5, name: "getrennt lebend"},
		],
		collection_day: [
			{value: 1, name: "1"},
			{value: 15, name: "15"},
		],
		employment_status: [
			{value: 1, name: "unbefristet"},
			{value: 2, name: "befristet"},
			{value: 3, name: "Probezeit"},

		]
	},

	category: 0,
	personal_data: {
		//salutation 1: Herr 2: Frau
		address: 1,
		birth_date: moment(),
		forename: "",
		surname: "",
		family_status: "",
		nationality: "",
		occupation: 0,
		has_credit_card: 0,
		has_ec_card: 0,
		has_real_estate: 0,
		housing_type: 0,
		main_earner: 0,
		car_owner: 0,


	},
	contact_data: {
		living_since: "date",//not required
		street_name: "",
		street_number: "",
		zip_code: "",
		city: "",
		telephone: "",
		mobile_telephone: "", //not required
		email: "",
	},
	income: {
		total: 0,
		net_income: 0,
		child_benefits: 0,
		other: 0,
	},
	expenses: {
		total_expenses: 135000,
		rent_and_mortgage: 10050,
		support_expenses: 5000,
		insurance_and_savings: 14860,
		memberships: 50000,
		debt_expenses: 30000,
		living_expenses: 5090,
		other: 20000
	},
	employer_data: {
		company: "auxmoney GmbH",
		street: "Königsallee 60 F",
		phone: "01234567890",
		zip: "40212",
		city: "",
		since: "date",
		employment_status: 1
	},
	bank_data: {
		iban: "",
		bic: ""
	}

};