const { override } = require('customize-cra');

module.exports = override(
  (config, env) => {
    config.module.rules.push(
      {
        test: /\.(png|jpg|jpeg|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'build/img', // Измените outputPath на 'build'
            },
          },
        ],
      },
    );
    return config;
  },
);
