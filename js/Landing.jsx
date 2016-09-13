const React = require('react')
const {hashHistory} = require('react-router')
const {Link} = require('react-router')
const { connector } = require('./Store')

// THE FUTURE IS NIGH
// going to use App as a stateless component which means its created just in javascript
// and not with react per se, avoiding some bloat from using React.createClass
const Landing = React.createClass({
  handleSearchTermEvenet(event){
    this.props.setSearchTerm(event.target.value)
  },
  goToSearch(event){
    hashHistory.push('search')
    event.preventDefault()
  },
  render () {
    return (
      <div className='home-info'>
        <h1 className='title'>Svideo!</h1>
        <form onSubmit={this.goToSearch}>
          <input className='search' type='text' placeholder='enter a movie name' value={this.props.searchTerm} onChange={this.handleSearchTermEvenet}/>
        </form>
        <Link to='/search' className='browse-all'> Browse All </Link>
      </div>
    )
  }
})
const {func, string} = React.PropTypes
Landing.propTypes = {
  searchTerm: string,
  setSearchTerm: func
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
module.exports = connector(Landing)
