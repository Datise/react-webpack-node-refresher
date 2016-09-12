const React = require('react')
const ReactDOM = require('react-dom');
const Landing = require('./Landing')
const Search = require('./search')
const Layout = require('./Layout')
const Details = require('./Details')
const {shows} = require('../public/data.json')

//index route allows for nested routes with the same path
const {Router, Route, IndexRoute, hashHistory} = require('react-router')

// Can be writter as:
// const ReactRouter = require('react-router')
// const Router = ReactRouter.Router

// THE FUTURE IS NIGH
// going to use App as a stateless component which means its created but 
// will not pull in all the bloat of react.create class
const App = React.createClass({
  //next State and replace will always be passed in for onEnter
  assignShow(nextState, replace){
    const showArray = shows.filter((show) => {
      return show.imdbID === nextState.params.id
    })
    console.log('showarray', showArray, 'nextState', nextState)
    // if the show doesnt exist send them back to homepage
    if(showArray.length < 1){
      return replace('/')
    }
      
    Object.assign(nextState.params, showArray[0])
    
    return nextState
  },
  render () { 
    return (
      // Router can keep track of history in many ways, hashHistory is the easiest
      // all routes will be defined in Route
      // /details/:id to identify a single thing
      <Router history={hashHistory}>
        <Route path='/' component={Layout}>
          <IndexRoute component={Landing}/>
          <Route path='/search' shows={shows} component={Search} />
          <Route path='/details/:id' component={Details} onEnter={this.assignShow}/>
        </Route>
      </Router>
    )
  }
})
// You can take the es6 by borrowing from implicit return, from coffee script, it looks like this
// var MyFirstComponent = () => (
//     <div>
//      <MyTitle title="Whatevs bruh"/>
//     </div>
// )
// personally I like explicit return as I think it communicates better to other developers what
// the function is trying to do
// Also worth noting, no other expressions can go in the implicit form
ReactDOM.render(<App/>, document.getElementById('app'))
// 
