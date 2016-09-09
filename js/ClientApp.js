var React = require('react')
var ReactDOM = require('react-dom')
var MyTitle = require("./MyTitle")

var div = React.DOM.div
var MyTitleFactory = React.createFactory(MyTitle)
var MyFirstComponent = (
  div(null,
    MyTitleFactory({title: 'Facts are great'})
  )
)
ReactDOM.render(MyFirstComponent, document.getElementById('app'))
