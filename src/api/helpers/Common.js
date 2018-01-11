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
	Logger.error('Error ejecutando ' + path.basename(controller) + ': ' + err);
	return res.status(400).json(err);
};

const formatRUt = function (data) {

	let rut = data.replace(/\./g, "");
	rut = rut.replace(/\-/g, "");

	return rut.slice(0, rut.length - 1) + "-" + rut[rut.length - 1];

};
const formatName = function (data) {
	return data.replace(/\ /g, "").toLowerCase();

};

const formatKey = function (data) {


	const cleanKey = data.replace(/\ /g, "");

	const key = cleanKey.replace(/\|/g, "");

	return data.replace(/[^A-Z0-9]/ig, "").toLowerCase();

};

function createUuid() {
	function S4() {
		return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
	}

	return (S4() + S4() + '-' + S4() + '-4' + S4().substr(0, 3) + '-' + S4() + '-' + S4() + S4() + S4()).toLowerCase();
}

const isEmptyString = function (string) {
	if (typeof string == 'undefined' || !string || 0 === string.length) {
		return true;
	} else {
		return false;
	}
};

module.exports.isEmptyString = isEmptyString;
module.exports.createUuid = createUuid;
module.exports.formatKey = formatKey;
module.exports.formatRut = formatRUt;
module.exports.settings = settings;
module.exports.getEnv = getEnv;
module.exports.formatName = formatName;
module.exports.handleError = handleError;
