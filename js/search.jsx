const React = require('react')
const ShowCard = require('./ShowCard')
const Header = require('./Header')
const {arrayOf, object} = React.PropTypes
const Search = React.createClass({
  getInitialState(){
    return {
      searchTerm: ''
    }
  },
  propTypes: {
    route: arrayOf(object)
  },
  handleSearchTermChange(searchTerm){
    console.log('fired')
    this.setState({searchTerm})
  },
  render (){ 
    return(
      <div className='container'>
        <Header showSearch={true} searchTerm={this.state.searchTerm} handleSearchTermChange={this.handleSearchTermChange} />
        <div className='shows'>
          {this.props.route.shows.filter((show) => `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
            .map((show) => {
            return <ShowCard show={show} key={show.imdbID} />
          })}
        </div>
      </div>
    )
  }
})

module.exports = Search