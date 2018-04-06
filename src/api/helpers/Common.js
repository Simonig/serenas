import path from 'path';
import Settings from '../settings';
import Logger from './Logger';

export const getEnv = () => process.env.ENV || 'local';

export const handleError = (res, err, controller) => {
  Logger.error(`Error ${path.basename(controller)}: ${err}`);
  return res.status(400).json(err);
};

export const settings = new Settings();
