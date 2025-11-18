// module.exports = {
//   preset: 'react-native',
//   setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
//   transformIgnorePatterns: [
//     'node_modules/(?!(jest-)?react-native|@react-native|react-native-.*|@react-native-community|@react-navigation)',
//   ],
//   testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
//   moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
//   collectCoverageFrom: [
//     'App.tsx',
//     'src/**/*.{ts,tsx}',
//     '!**/node_modules/**',
//     '!**/__tests__/**',
//   ],
//   coverageDirectory: 'coverage',
//   coverageReporters: ['text', 'lcov', 'html'],
// };

module.exports = {
  preset: 'react-native',
  collectCoverage: true,
  coverageReporters: ['text', 'lcov'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@react-navigation)/)',
  ],
};
