module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        allowUndefined: true,
      },
    ],
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@types': ['./src/@types'],
          '@assets': ['./src/assets'],
          '@components': ['./src/components'],
          '@navigation': ['./src/navigation'],
          '@screens': ['./src/screens'],
          '@services': ['./src/services'],
          '@theme': ['./src/theme'],
          '@utils': ['./src/utils'],
        },
      },
    ],
  ],
};
