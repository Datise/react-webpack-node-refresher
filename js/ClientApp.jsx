const React = require('react')
const ReactDOM = require('react-dom')
const MyTitle = require("./MyTitle")
// THE FUTURE IS NIGH
const div = React.DOM.div
// going to use MyFirstComponent as a stateless component which means its created just in javascript
// and not with react per se, avoiding some bloat from using React.createClass
var MyFirstComponent = () => {
  return (
    <div>
     <MyTitle title="Whatevs bruh"/>
    </div>
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
ReactDOM.render(<MyFirstComponent/>, document.getElementById('app'))
