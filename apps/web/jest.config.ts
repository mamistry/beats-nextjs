/* eslint-disable */
export default {
  displayName: 'web',
  preset: '../../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nrwl/next/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/apps/web',
  coverageReporters: ['json', 'lcov', 'clover', 'text'],
  coverageThreshold: {
    global: {
        branches: 10,
        functions: 10,
        lines: 10,
        statements: 10
    }
  }
};
