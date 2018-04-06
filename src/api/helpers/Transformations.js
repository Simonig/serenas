/* eslint-disable import/prefer-default-export */
export const camelCaseKeysToUnderscore = (obj) => {
  if (typeof (obj) !== 'object') return obj;

  const newObject = {};
  const keys = Object.keys(obj);

  keys.forEach((oldName) => {
    const newName = oldName.replace(/([A-Z])/g, $1 => `_${$1.toLowerCase()}`);

    newObject[newName] = obj[oldName];

    if (typeof (obj[oldName]) === 'object') {
      newObject[newName] = camelCaseKeysToUnderscore(obj[oldName]);
    }
  });

  return newObject;
};
