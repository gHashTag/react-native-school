module.exports = {
    $plugins: [
      require('@reframe/react-kit'),
      require('@reframe/react-native-web')
    ],
    serverStartFile: require.resolve('./server/start.js'),
};
