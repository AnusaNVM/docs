const webpack = require('webpack')

module.exports = function (context, options) {
    return {
      name: 'http-support',
      configureWebpack(config, isServer, utils) {
        return {
            plugins: [
                new webpack.ProvidePlugin({
                    process: 'process/browser',
                    Buffer: ['buffer', 'Buffer'],
                  }),
                ],
          resolve: {
            fallback: {
                "http": require.resolve("stream-http"),
                "proccess": require.resolve("process"),
                "https": require.resolve("https-browserify"),
                "timers": require.resolve("timers-browserify"),
                "url": require.resolve("url/"),
                "buffer": require.resolve("buffer/")
            }
          },
        };
      },
    };
};