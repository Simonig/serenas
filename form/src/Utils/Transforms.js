export const convertStatusToError = (statusCode) => {
  switch (statusCode) {
    default:
      return 'There is no internet connection';
  }
};

export const convertMomentToDate = (obj) => {
  const newObject = Object.assign({}, obj);

  if ({}.hasOwnProperty.call(obj, 'personal_data')
    && {}.hasOwnProperty.call(obj.personal_data, 'birth_date')) {
    const date = obj.personal_data.birth_date.substring(0, 10);
    newObject.personal_data.birth_date = date;
  }

  if ({}.hasOwnProperty.call(obj, 'contact_data')
    && {}.hasOwnProperty.call(obj.contact_data, 'living_since')) {
    const date = obj.contact_data.living_since.substring(0, 10);
    newObject.contact_data.living_since = date;
  }

  if ({}.hasOwnProperty.call(obj, 'employer_data')
    && {}.hasOwnProperty.call(obj.employer_data, 'since')) {
    const date = obj.employer_data.since.substring(0, 10);
    newObject.employer_data.since = date;
  }

  return newObject;
};
