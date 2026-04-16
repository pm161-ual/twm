module.exports = {
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: [
    'app_server/**/*.js',
    '!app_server/**/*.test.js',
    '!app_server/**/node_modules/**'
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html', 'json-summary'],
  coveragePathIgnorePatterns: [
    '/node_modules/'
  ],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: 'test-results',
        outputName: 'junit.xml',
        classNameTemplate: '{classname}',
        titleTemplate: '{title}',
        ancestorSeparator: ' › ',
        usePathAsClassName: 'true'
      }
    ]
  ],
  testMatch: ['**/test/**/*.test.js'],
  testPathIgnorePatterns: ['/node_modules/']
};
