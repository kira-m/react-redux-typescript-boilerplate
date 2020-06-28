
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = {
  mode: 'development',
  entry: ['./src/index.tsx'],
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].[hash].js',
    publicPath: '/',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.css', '.ts', '.tsx', '.js'],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: [/node_modules/, /\.stories\.tsx$/],
        use: [
          {
            loader: 'ts-loader',
            options: { transpileOnly: true },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
          {loader: 'postcss-loader', options: {
            plugins: function() {
              return [
                require('tailwindcss')('./tailwind.config.js'),
                require('autoprefixer'),
              ]
            }
          }}
        ]
      }
    ],
  },
    
  plugins: [
    new HtmlWebpackPlugin({
      template: 'static/index.template.html',
      filename: 'index.html',
    }),

    new CleanWebpackPlugin({cleanOnceBeforeBuildPatterns: ['**/*']}),

  ]
};

module.exports = config;
