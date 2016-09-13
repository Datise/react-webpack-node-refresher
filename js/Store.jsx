const redux = require('redux')
//react redux provides some helper functions
const reactRedux = require('react-redux')
const {shows} = require('../public/data')
const SET_SEARCH_TERM = 'setSearchTerm'
const initialState = {
  searchTerm: '',
  shows
}
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM: 
      // in redux you must return a newState
      // this must absolutely be a pure function
      //    input in, output out, nothing else gets modifyed 
      return reduceSearchTerm(state, action)
      // must return something incase theres a problem. If theres a problem your entire state
      // will be blown away. 
    default:
      return state
  }
}

const reduceSearchTerm = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {searchTerm: action.value})
  return newState
}
//initial state and redux compose are for redux dev tools, should not be shipped
const store = redux.createStore(rootReducer, initialState, redux.compose(
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? 
  window.devToolsExtension() : (f) => f
))

const mapStateToProps = (state) => {
  // this gets redux to pass back to react as this.props.searchTerm
  // anyway that is connected will get the following passed into its props
  return { 
    searchTerm: state.searchTerm,
    shows: state.shows
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setSearchTerm: (searchTerm) => {
      dispatch({type: SET_SEARCH_TERM, value: searchTerm})
    }
  }
}
//we will call it with this.props.setSearchTerm('house') and it will call dispatch 


const connector = reactRedux.connect(mapStateToProps, mapDispatchToProps)
// this is basically a wrapper to add stuff to components, when components want access to these functions
// and behaviour you should build connectors for that.

module.exports = { connector, store}

