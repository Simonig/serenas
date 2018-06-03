import { isValidBIC, isValidIBAN } from 'ibantools';
import validator from 'validator';

export default (name, value) => {
  switch (name) {
    case 'bic':
      return isValidBIC(value) ? null : 'The BIC value isn\'t valid';
    case 'isAcceptedSolvencyRetrieval':
      return validator.isInt(value, { min: 1 }) ? null : 'You must accept the Solvency Retrieval';
    case 'isAcceptedTermsOfService':
      return validator.isInt(value, { min: 1 }) ? null : 'You must accept the Terms of Service';
    case 'iban':
      return isValidIBAN(value) ? null : 'The IBAN value isn\'t valid';
    default:
      return null;
  }
};
