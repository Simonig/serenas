import moment from 'moment';


export const OCCUPATION_OPTIONS = [
  { value: 1, name: 'Vorstand/Geschäftsführer' },
  { value: 2, name: 'leitender Angestellter' },
  { value: 3, name: 'Angestellter' },
  { value: 4, name: 'Beamter im gehobenen Dienst' },
  { value: 5, name: 'Beamter im höheren Dienst' },
  { value: 6, name: 'Beamter im mittleren Dienst' },
  { value: 7, name: 'Beamter im einfachen Dienst' },
  { value: 8, name: 'Zeitsoldat' },
  { value: 9, name: 'Berufssoldat' },
  { value: 10, name: 'Meister' },
  { value: 11, name: 'Selbstständig' },
  { value: 12, name: 'Facharbeiter' },
  { value: 13, name: 'Arbeiter' },
  { value: 14, name: 'Student' },
  { value: 15, name: 'Schüler' },
  { value: 16, name: 'Auszubildender' },
  { value: 17, name: 'Grundwehr-/Zivildienstleistender' },
  { value: 18, name: 'Hausfrau/-mann' },
  { value: 19, name: 'Rentner/Pensionär' },
  { value: 20, name: 'ohne Beschäftigung' },
  { value: 21, name: '(keine Angabe/sonstiges)' },
];

export const DURATION_OPTIONS = [
  { value: 12, name: 12 },
  { value: 24, name: 24 },
  { value: 36, name: 36 },
  { value: 48, name: 48 },
  { value: 60, name: 60 },
];

export const YES_NO_OPTIONS = [
  { value: 0, name: 'nein' },
  { value: 1, name: 'ja' },
];

export const HOUSING_TYPE_OPTIONS = [
  { value: 1, name: 'Eigentum' },
  { value: 2, name: 'Miete' },
  { value: 3, name: 'bei den Eltern' },
];

export const FAMILY_STATUS_OPTIONS = [
  { value: 1, name: 'ledig' },
  { value: 2, name: 'verheiratet' },
  { value: 3, name: 'verwitwet' },
  { value: 4, name: 'geschieden' },
  { value: 5, name: 'getrennt lebend' },
];

export const COLLECTION_DAY_OPTIONS = [
  { value: 1, name: '1' },
  { value: 15, name: '15' },
];

export const EMPLOYMENT_STATUS_OPTIONS = [
  { value: 1, name: 'unbefristet' },
  { value: 2, name: 'befristet' },
  { value: 3, name: 'Probezeit' },
];

export const INITIAL_STATE = {
  loanAsked: 1000,
  duration: '12',
  externalId: 'ext_1',
  rsv: 'false',
  collectionDay: '1',
  isAcceptedTermsOfService: false,
  isAcceptedSolvencyRetrieval: false,

  category: 0,
  personalData: {
    // salutation 1: Herr 2: Frau
    address: 1,
    birthDate: moment(),
    forename: '',
    surname: '',
    familyStatus: '',
    nationality: 'DE',
    occupation: 0,
    hasCreditCard: 0,
    hasEcCard: 0,
    hasRealEstate: 0,
    housingType: 0,
    mainEarner: 0,
    carOwner: 0,
  },
  contactData: {
    livingSince: moment(), // not required
    streetName: '',
    streetNumber: '',
    zipCode: '',
    city: '',
    telephone: '',
    mobileTelephone: '', // not required
    email: '',
  },
  income: {
    total: 0,
    netIncome: 0,
    childBenefits: 0,
    other: 0,
  },
  expenses: {
    totalExpenses: 135000,
    rentAndMortgage: 10050,
    supportExpenses: 5000,
    insuranceAndSavings: 14860,
    memberships: 50000,
    debtExpenses: 30000,
    livingExpenses: 5090,
    other: 20000,
  },
  employerData: {
    company: 'auxmoney GmbH',
    street: 'Königsallee 60 F',
    phone: '01234567890',
    zip: '40212',
    city: '',
    since: moment(),
    employmentStatus: 1,
  },
  bankData: {
    iban: '',
    bic: '',
  },

};
