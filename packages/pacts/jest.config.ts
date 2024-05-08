const base = require('../../jest.config.base');
const pack = require('./package');

const config = {
  ...base,
  displayName: pack.name,
  rootDir: '.',
  roots: ['<rootDir>'],
};

export default config;
