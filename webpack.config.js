// with this file, scripts just have to be webpack
const path = require('path')

module.exports = {
  context: __dirname,
  entry: './js/ClientApp.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  // resolve is the order o
  resolve: {
    // Extensions say: "If I didn't find this, look for this". It gives webpack an order to
    // procceed when requiring files. 
    extensions: ['', '.js', '.jsx', '.json']
  },
  // stats help give some data about whats going on
  stats: {
    //colors help parsing
    colors: true,
    // verbose error messages
    reasons: true,
    // chunks
    chunks: false
  },
  module: {
    // build pipeline stuff, an array because it 'does this, then does that ' etc.
    loaders: [
      {
        // if file matches regex, then do the loader with it
        test: /\.jsx?$/,
        // anything test returns true, run it through loader (in this case babel)
        loader: 'babel-loader'
      }
    ]
  }
}