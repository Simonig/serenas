import dateFormat from 'dateformat';
import winston from 'winston';

let logger = null;

function getLogger() {
  if (logger == null) {
    logger = new (winston.Logger)({
      transports: [
        new (winston.transports.Console)({
          timestamp() {
            const now = Date.now();
            return dateFormat(now, 'dd-mm-yyyy HH:MM:ss');
          },
          formatter(options) {
            // Return string will be passed to logger.
            return `[${options.timestamp()}]:[${options.level.toUpperCase()}]:${undefined !== options.message ? options.message : ''
            }${options.meta && Object.keys(options.meta).length ? `\n\t${JSON.stringify(options.meta)}` : ''}`;
          },
        }),
      ],
    });
    // logger.level = Common.getEnv() == 'production' ? 'info' : 'debug';
    logger.level = 'debug';
  }

  return logger;
}

const debug = message => getLogger().debug(message);

const error = message => getLogger().error(message);

const info = message => getLogger().info(message);

const warn = message => getLogger().warn(message);

export default {
  debug,
  error,
  info,
  warn,
};
