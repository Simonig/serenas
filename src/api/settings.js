/**
 * Module dependencies.
 */
import conf from 'conf';
import Logger from './helpers/Logger';
import Common from './helpers/Common';
let settings = null;

/**
 * Almacena la configuración de la aplicación
 * @constructor
 */
function Settings() {
    settings = {};
    const env = Common.getEnv();

    Logger.info('Environment: ' + env.toUpperCase());

    set('env', env);
    const envSettings = conf.settings[env];

    for (let name in envSettings) {
        if (envSettings.hasOwnProperty(name)) {
            set(name, envSettings[name]);
        }
    }
    return settings;
}

const set = function(key, val) {
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
