/**
 * Module dependencies.
 */
var conf = require('conf');
var Logger = require('helpers/Logger');
var Common = require('helpers/Common');
var settings = null;

/**
 * Almacena la configuración de la aplicación
 * @constructor
 */
function Settings() {
    settings = {};
    var env = Common.getEnv();

    Logger.info('Environment: ' + env.toUpperCase());

    set('env', env);
    var envSettings = conf.settings[env];

    for (var name in envSettings) {
        if (envSettings.hasOwnProperty(name)) {
            set(name, envSettings[name]);
        }
    }
    return settings;
}

var set = function(key, val) {
    if (settings == null) {
        settings = new Settings();
    }
    settings[key] = val;
};

module.exports.get = function(key) {
    if (settings == null) {
        settings = new Settings();
    }
    return settings[key];
};
