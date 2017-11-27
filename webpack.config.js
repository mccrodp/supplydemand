const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const global = path.resolve(__dirname)

module.exports = {
  entry: [
    './src/client/index.js',
    path.join(__dirname, 'src', 'client', 'index.js')
  ],
  devtool: 'eval-source-map',
  output: {
    path: path.join(global, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new ExtractTextPlugin({
      allChunks: true,
      filename: 'style.css'
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ],
  module: {
    rules: [{
      test: /\.js$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/,
      include: global
    },
    {
      test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
      loader: 'file-loader?name=fonts/[name].[ext]&context=../assets/fonts',
      include: global
    },
    {
      test: /\.(gif|png|jpe?g|ico)(\?[a-z0-9]+)?$/i,
      loader: 'file-loader?name=img/[name].[ext]&context=../assets/img',
      include: global
    },
    {
      test: /\.css?$/,
      loaders: ExtractTextPlugin.extract('style-loader', 'css-loader'),
      include: global
    },
    {
      test: /\.scss?$/,
      loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          'css-loader?sourceMap',
          'sass-loader?outputStyle=expanded&sourceMap=true&sourceMapContents=true'
        ]
      })
    }
    ]
  },
  resolve: {
    // We can now require('file') instead of require('file.jsx')
    extensions: ['json', '.js', '.jsx', '.scss']
  }
}
