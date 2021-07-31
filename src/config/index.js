//ROOT CONFIG FILE

const env = require('env-var');

class AppConstants {
  static PORT = env.get('PORT').asInt();
  static DATABASE_URL = env.get('DATABASE_URL').asString();
}

module.exports = AppConstants;
