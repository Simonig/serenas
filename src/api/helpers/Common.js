import path from 'path';
import Settings from '../settings';
import Logger from './Logger';

const settings = function () {
	return Settings;
};

const getEnv = function () {
	return process.env.ENV || 'local';
};


const handleError = function (res, err, controller) {
	Logger.error('Error ' + path.basename(controller) + ': ' + err);
	return res.status(400).json(err);
};


module.exports.settings = settings;
module.exports.getEnv = getEnv;
module.exports.handleError = handleError;
