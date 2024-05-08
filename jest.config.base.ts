const { pathsToModuleNameMapper } = require('ts-jest');
const { join } = require('path');
const { compilerOptions } = require('./tsconfig');

module.exports = {
  roots: ['<rootDir>/src', '<rootDir>/test'],
  reporters: ['default'],
  transform: {
    '^.+\\.ts$': ['ts-jest', { isolatedModules: true }],
  },
  testRegex: 'test/.*\\.test.ts$',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>../../',
  }),
  testEnvironment: 'node',
  resetMocks: true,
};
