const nextJest = require('next/jest');

const createConfig = nextJest({
    dir: './'
});

module.exports = createConfig({
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
});