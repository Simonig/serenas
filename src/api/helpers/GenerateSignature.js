import crypto from 'crypto';

export default (obj, secret) => {
  const value = Object.entries(obj).sort().reduce((str, [k, v]) => str + k + v, '');
  const hash = crypto.createHmac('sha256', Buffer.from(secret, 'utf8'));
  hash.update(value);
  return hash.digest('hex');
};
