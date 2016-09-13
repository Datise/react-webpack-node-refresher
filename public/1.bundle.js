webpackJsonp([1],{

/***/ 247:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);

	var _require = __webpack_require__(162);

	var browserHistory = _require.browserHistory;

	var _require2 = __webpack_require__(162);

	var Link = _require2.Link;

	var _require3 = __webpack_require__(225);

	var connector = _require3.connector;

	// THE FUTURE IS NIGH
	// going to use App as a stateless component which means its created just in javascript
	// and not with react per se, avoiding some bloat from using React.createClass

	var Landing = React.createClass({
	  displayName: 'Landing',
	  handleSearchTermEvenet: function handleSearchTermEvenet(event) {
	    this.props.setSearchTerm(event.target.value);
	  },
	  goToSearch: function goToSearch(event) {
	    browserHistory.push('search');
	    event.preventDefault();
	  },
	  render: function render() {
	    return React.createElement(
	      'div',
	      { className: 'home-info' },
	      React.createElement(
	        'h1',
	        { className: 'title' },
	        'Svideo!'
	      ),
	      React.createElement(
	        'form',
	        { onSubmit: this.goToSearch },
	        React.createElement('input', { className: 'search', type: 'text', placeholder: 'enter a movie name', value: this.props.searchTerm, onChange: this.handleSearchTermEvenet })
	      ),
	      React.createElement(
	        Link,
	        { to: '/search', className: 'browse-all' },
	        ' Browse All '
	      )
	    );
	  }
	});
	var _React$PropTypes = React.PropTypes;
	var func = _React$PropTypes.func;
	var string = _React$PropTypes.string;

	Landing.propTypes = {
	  searchTerm: string,
	  setSearchTerm: func
	};
	// You can take the es6 by borrowing from implicit return, from coffee script, it looks like this
	// var MyFirstComponent = () => (
	//     <div>
	//      <MyTitle title="Whatevs bruh"/>
	//     </div>
	// )
	// personally I like explicit return as I think it communicates better to other developers what
	// the function is trying to do
	// Also worth noting, no other expressions can go in the implicit form
	module.exports = connector(Landing);

/***/ }

});