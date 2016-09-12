const React = require('react')
const {Link} = require('react-router')
const {connector} = require('./Store')
const {func, bool, string, number} = React.PropTypes
const Header = React.createClass({
  propTypes: {
    //handleSearchTerm: func,
    //is now
    setSearchTerm: func,
    showSearch: bool,
    searchTerm: string
  },
  handleSearchTermEvent(e){
    //this.props.handleSearchTermChange(e.target.value)
    // with redux supplying it is now
    this.props.setSearchTerm(e.target.value)
  },
  render(){
    let utilSpace
    if(this.props.showSearch){
      utilSpace = <input type='text' className='search-input' placeholder='search' value={this.props.searchTerm} onChange={this.handleSearchTermEvent}/>
    }else{
      utilSpace = <h2 className='header-back'> <Link to='/search'> Back </Link></h2>
    }
    return(
      <header className='header'>
        <h1 className='brand'><Link to='/' className='brand-link'>SVideo</Link></h1>
        {utilSpace}
      </header>
    )
  }
})

module.exports = connector(Header)