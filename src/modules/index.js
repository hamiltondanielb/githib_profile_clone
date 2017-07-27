import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import github from './github/reducer.js'

export default combineReducers({
  routing: routerReducer,
  github
})
