import { isValidBIC, isValidIBAN } from 'ibantools';

export default (name, value) => {
  switch (name) {
    case 'bic':
      return isValidBIC(value) ? null : 'The BIC value isn\'t valid';
    case 'iban':
      return isValidIBAN(value) ? null : 'The IBAN value isn\'t valid';
    default:
      return null;
  }
};
