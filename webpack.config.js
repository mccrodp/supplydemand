const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const sassLoaders = [
  'css?sourceMap',
  'sass?outputStyle=expanded&sourceMap=true&sourceMapContents=true'
]

const global = path.resolve(__dirname)

module.exports = {
  debug: true,
  entry: [
    './src/client/index.js',
    path.join(__dirname, 'src', 'client', 'index.js')
  ],
  devtool: 'inline-source-map',
  output: {
    path: path.join(global, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        include: global
      },
      {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file?name=fonts/[name].[ext]&context=../assets/fonts',
        include: global
      },
      {
        test: /\.(gif|png|jpe?g|ico)(\?[a-z0-9]+)?$/i,
        loader: 'file?name=img/[name].[ext]&context=../assets/img',
        include: global
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.css?$/,
        loaders: ExtractTextPlugin.extract('style', 'css'),
        include: global
      },
      {
        test: /\.scss?$/,
        loader: ExtractTextPlugin.extract('style', sassLoaders.join('!'))
      }
    ]
  },
  resolve: {
    // We can now require('file') instead of require('file.jsx')
    extensions: ['', 'json', '.js', '.jsx', '.scss']
  }
}
