import validator from 'validator';
export default (name, value) => {
  switch (name) {
    case 'loanAsked':
      return validator.isInt(value, { min: 1000, max: 25000 }) ? null : 'The loan asked isn\'t enough or it\'s too much';
    case 'duration':
      return validator.isInt(value, { min: 12, max: 60 }) ? null : 'The duration provided isn\'t valid';
    case 'collectionDay':
      return validator.isInt(value, { min: 1, max: 15 }) ? null : 'The collection day is invalid';
    case 'rsv':
      return validator.isBoolean(value) ? null : 'The RSV is invalid';
    case 'isAcceptedTermsOfService':
      return value === true || value === 'true' ? null : 'You must accept the terms of the service';
    case 'isAcceptedSolvencyRetrieval':
      return value === true || value === 'true' ? null : 'You must accept the solvency retrieval';
    default:
      return null;
  }
};
