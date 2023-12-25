const winston = require('winston');
const {format, createLogger, transports} = winston;
const {printf, timestamp, combine, uncolorize, colorize} = format;
const config = require('./config');

const winstonLogformat = printf((obj) => {
  const {level, message, timestamp, stack} = obj;
  return `${timestamp}: ${level}: ${stack || message}`;
});
const logger = createLogger(
  {
    level: config.env === 'development' ? 'debug' : 'info',
    format: combine(timestamp(), winstonLogformat, config.env === 'development' ? colorize() : uncolorize()),
    transports: [new transports.Console()],
  }
);

module.exports = logger;

