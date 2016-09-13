const React = require('react')
const Layout = require('./Layout')
const ReactRouter = require('react-router')
// make all other calls for components async, see code below
const { Router, browserHistory } = require('react-router')
const { store } = require('./Store')
const { Provider } = require('react-redux')
// if you choose to chunk with webpack, you need to adapt routes to be asynchronous
// node and webpack do not use the same require so we must mitigate with below
if (typeof module !== 'undefined' && module.require){
  if (typeof require.ensure === 'undefined'){
    require.ensure = require('node-ensure') // shim for node.js
  }
}
const rootRoute = {
  component: Layout,
  path: '/',
  indexRoute: {
    getComponent (location, cb){
      require.ensure([], (error) => {
        cb(null, require('./Landing'))
      })
    }
  },
  childRoutes: [
    {
      path: 'search',
      getComponent (location, cb) {
        // ensure says "make sure i have these modules available to me, then do this action"
        require.ensure([], (error) => {
          cb(null, require('./Search'))
        })
      }
    },
    {
      path: 'details/:id',
      getComponent (location, cb) {
        require.ensure([], (error) => {
          cb(null, require('./Details'))
        })
      }
    }
  ]
}

const App = React.createClass({
  render () {
    return (
      <Provider store={store}>
        <Router history={browserHistory} routes={rootRoute}/>
      </Provider>
    )
  }
})
// this is to allow node to see the routes
App.Routes = rootRoute
//share browser history
App.History = browserHistory
module.exports = App