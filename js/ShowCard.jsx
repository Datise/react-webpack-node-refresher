const React = require('react')
const {Link} = require('react-router')
const ShowCard = (props) => (
  <Link to={`/details/${props.show.imdbID}`} className='show-card'>
   <img src={`public/img/posters/${props.show.poster}`} className='show-card-img'/>
   <div className='show-card-text'>
    <h3 className='show-card-title'>{props.show.tite}</h3>
    <h4 className='show-card-year'>"({props.show.year})"</h4>
    <p className='show-card-description'>{props.show.description}</p>
   </div>
  </Link>
)
const string = React.PropTypes
ShowCard.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
  year: string.isRequired,
  poster: string.isRequired
}
module.exports = ShowCard