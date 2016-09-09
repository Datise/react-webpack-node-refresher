// with this file, the scripts command just has to be webpack
// Naming of this file is important, webpack looks for this file specifically when bundling
//Path makes requrie relative paths a little easier. 
const path = require('path')
// This object is fed into webpack and then webpack will use everything for us.
module.exports = {
  // node exposes dirname that lets you know where you're running it from, you can run it from
  // anywhere in your directory with this
  context: __dirname,
  // entry file, the first file for webpack to start with (main file for the project)
  // Hint: this file will usually/should has no exports
  entry: './js/ClientApp.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    // Extensions say: "If I didn't find this, look for this". It gives webpack an order to
    // procceed when searching for files by name. 
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