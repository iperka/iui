module.exports = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    ".(css|less|scss)$": "identity-obj-proxy",
    "\\.svg": "<rootDir>/__mocks__/svgrMock.js",
  },
  setupFilesAfterEnv: ['./tests.ts']
};
