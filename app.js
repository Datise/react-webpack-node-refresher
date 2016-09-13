require('babel-register')

const express = require('express')
const React = require('react')
// a package for rendering react as a string
const ReactDOMServer = require('react-dom/server')
const ReactRouter = require('react-router')
const match = ReactRouter.match
const RouterContext = ReactRouter.RouterContext
const ReactRedux = require('react-redux')
const Provider = ReactRedux.Provider
// not webpack , theres no resolve so must specify file ending
const Store = require('./js/Store.jsx')
const store = Store.store
const _ = require('lodash')
const port = 5050
const fs = require('fs')
const baseTemplate = fs.readFileSync('./index.html')
// creates a new function so whenever we call template it will create a string using
// this template
const template = _.template(baseTemplate)
const App = require('./js/App.jsx')
const Routes = App.Routes

//create a new express app
const app = express()
// whenever someone requests a file, just serve it from public
// express.static sets some headers and some other helper behaviour
app.use('/public', express.static('./public'))

app.use((req, res) => {
  // the function to use the same matching algorithm react router uses on the server
  match({ routes: Routes, location: req.url }, (error, redirectLocation, renderProps) => {
    // it will call this function whenever it works or fails
    // error = error
    // redirectLocation is react router asking for the server to redirect the somewhere
    // renderProps is I found the correct route, here are the things I want you to give to the route
    if (error) {
      // the server exploded
      res.status(500).send(error.message)
    } else if (redirectLocation){
      // maintain all the parameters all the way through to the 302
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps){
      // happy path
      // body should be string of react app
      // RouterContext is below ReactRouter and passes in all the renderProps to the necessary stuffs
      const body = ReactDOMServer.renderToString(
        React.createElement(Provider, {store}, 
          React.createElement(RouterContext, renderProps)
        )
      )
      // insert body into template tag
      res.status(200).send(template({body}))
    }else{
      res.status(404).send('not found')
    }
  })
})
console.log('listening on port ' + port)
app.listen(port)
