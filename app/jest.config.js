module.exports = {
  roots: ['./src'],
  transform: {
    '.(ts|tsx)': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest',
  },
  testPathIgnorePatterns: ['./__tests__/setupTests.js'],
  collectCoverageFrom: ['./src/**/**/*.{js,jsx,ts,tsx}', '!/node_modules/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['./__tests__/setupTests.js'],
  testMatch: ['**/__tests__/*.js?(x)'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__tests__/fileMock.js',
    '^@/([^\\.]*)$': '<rootDir>/src/$1',
  },
};
