const React = require('react')
const ReactDOM = require('react-dom');
const Landing = require('./Landing')
const {Router, Route, hashHistory} = require('react-router')
// Can be writter as:
// const ReactRouter = require('react-router')
// const Router = ReactRouter.Router

// THE FUTURE IS NIGH
// going to use App as a stateless component which means its created but 
// will not pull in all the bloat of react.create class
const App = () => {
  return (
    // Router can keep track of history in many ways, hashHistory is the easiest
    // all routes will be defined in Route
    <Router history={hashHistory}>
      <Route path='/' component={Landing}/>
    </Router>
  )
}
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
