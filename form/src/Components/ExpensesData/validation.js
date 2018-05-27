import validator from 'validator';
export default (name, value) => {
  switch (name) {
    case 'totalExpenses':
      return validator.isInt(value, { min: 0 }) ? null : 'You must provide a valid amount of total expenses';
    case 'rentAndMortgage':
      return validator.isInt(value, { min: 0 }) ? null : 'You must provide a valid amount of rent and mortgage';
    case 'supportExpenses':
      return validator.isInt(value, { min: 0 }) ? null : 'You must provide a valid amount of support expenses';
    case 'insuranceAndSavings':
      return validator.isInt(value, { min: 0 }) ? null : 'You must provide a valid amount of insurance and savings';
    case 'memberships':
      return validator.isInt(value, { min: 0 }) ? null : 'You must provide a valid amount of memberships';
    case 'debtExpenses':
      return validator.isInt(value, { min: 0 }) ? null : 'You must provide a valid amount of debtExpenses';
    case 'other':
      return validator.isInt(value, { min: 0 }) ? null : 'You must provide a valid amount';
    default:
      return null;
  }
};
