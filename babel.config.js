module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          src: './src',
        },
      },
    ],
    'react-native-reanimated/plugin', //react-native-reanimated/plugin has to be listed last.
  ],
};
