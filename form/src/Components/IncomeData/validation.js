import validator from 'validator';
export default (name, value) => {
  switch (name) {
    case 'total':
      return validator.isInt(value, { min: 0 }) ? null : 'You must provide a valid total';
    case 'netIncome':
      return validator.isInt(value, { min: 0 }) ? null : 'You must provide a valid net income';
    case 'childBenefits':
      return validator.isInt(value, { min: 0 }) ? null : 'You must provide a valid child benefits amount';
    case 'other':
      return validator.isInt(value, { min: 0 }) ? null : 'You must provide a valid amount';
    default:
      return null;
  }
};
