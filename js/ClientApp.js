var div = React.DOM.div
var h1 = React.DOM.h1
var MyTitle = React.createClass({
  render(){
    return(
      div(null, h1(null, this.props.title))
    )
  }
})
var MyTitleFactory = React.createFactory(MyTitle)
var MyFirstComponent = (
  div(null,
    MyTitleFactory({title: "Facts are great"})
  )
)
ReactDOM.render(MyFirstComponent, document.getElementById("app"))