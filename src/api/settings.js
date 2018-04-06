/**
 * Module dependencies.
 */
import conf from './conf';
import Logger from './helpers/Logger';
import { getEnv } from './helpers/Common';

class Settings {
  constructor() {
    this.settings = {};

    const env = getEnv();
    Logger.info(`Environment: ${env.toUpperCase()}`);

    this.set('env', env);
    const envSettings = conf[env];

    const settingKeys = Object.keys(envSettings);

    settingKeys.forEach((name) => {
      this.set(name, envSettings[name]);
    });
  }

  set = (key, val) => {
    this.settings[key] = val;
  };

  get = key => this.settings[key];
}

export default Settings;

