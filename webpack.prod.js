const webpack = require('webpack');
const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const { ui, main } = require('./webpack.common.js');


const prodConfig = {
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          mangle: false,
        }
      })
    ]
  }
};

const additionalPlugins = [];

if (process.env.BUNDLE_ANALYZER) {
  additionalConfig.push([
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: './bundles/server.html'
    })
  ]);
}

const prodUiConfig = merge(ui, prodConfig, { plugins: additionalPlugins });
const prodMainConfig = merge(main, prodConfig);

module.exports = [prodUiConfig, prodMainConfig];
