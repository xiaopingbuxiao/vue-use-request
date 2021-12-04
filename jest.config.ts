import type {Config} from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  preset:'ts-jest',
  testEnvironment: 'jsdom',
  watchPathIgnorePatterns: ['/node_modules/', '/dist/', '/.git/'],
};
export default config;

