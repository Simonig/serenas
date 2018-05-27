import validator from 'validator';
export default (name, value) => {
  switch (name) {
    case 'streetName':
      return validator.isEmpty(value) ? 'You must provide a street name' : null;
    case 'streetNumber':
      return validator.isEmpty(value) ? 'You must provide a street number' : null;
    case 'zipCode':
      return validator.isEmpty(value) ? 'You must provide a zip code' : null;
    case 'city':
      return validator.isEmpty(value) ? 'You must provide a city' : null;
    case 'telephone':
      return validator.isEmpty(value) ? 'You must provide a phone number' : null;
    case 'mobileTelephone':
      return validator.isEmpty(value) ? 'You must provide a mobile phone number' : null;
    case 'email':
      return validator.isEmpty(value) ? 'You must provide an email' : null;
    default:
      return null;
  }
};
