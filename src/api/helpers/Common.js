import path from 'path';
import Settings from '../settings';
import Logger from './Logger';

var settings = function () {
    return Settings;
};

var getEnv = function () {
    return process.env.SWAGGER_ENV || 'local';
};


var handleError = function (res, err, controller) {
    Logger.error('Error ejecutando ' + path.basename(controller) + ': ' + err);
    return res.status(400).json(err);
};

var formatRUt = function (data) {

    var rut = data.replace(/\./g, "");
    rut = rut.replace(/\-/g, "");
    var format_rut = rut.slice(0, rut.length - 1) + "-" + rut[rut.length - 1];

    return format_rut

};
var formatName = function (data) {

    var name = data.replace(/\ /g, "").toLowerCase();

    return name

};
var formatKey = function (data) {


    var cleanKey = data.replace(/\ /g, "");

    var key = cleanKey.replace(/\|/g, "");

    console.log(data.replace(/[^A-Z0-9]/ig, ""))

    return data.replace(/[^A-Z0-9]/ig, "").toLowerCase();

};

function createUuid() {
    function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }

    return (S4() + S4() + '-' + S4() + '-4' + S4().substr(0, 3) + '-' + S4() + '-' + S4() + S4() + S4()).toLowerCase();
}

var isEmptyString = function (string) {
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
