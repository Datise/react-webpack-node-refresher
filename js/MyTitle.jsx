const React = require('react')
const div = React.DOM.div
const h1 = React.DOM.h1
// const vs var 
// es6 playland! all of 'var's can be const
// bryan holt opinion : use const everywhere
// default to const because he doesn't plan on changing this ever
// let for things he plans on allowing to change

// react.create class has some overhead, or baggage in it like some state helpers and what not
// if you dont need it use a stateless component like clientapp.js
var MyTitle = React.createClass({
  // anything inside curly praces is a javascript expression, so it tells jsx
  // to run the javascript and return the result
  render () {
    return (
      <div>
        <h1> {this.props.title} </h1>
      </div>
    )
  }
})

module.exports = MyTitle
