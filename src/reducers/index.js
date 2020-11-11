import { combineReducers } from 'redux'

import stats from './stats'
import general from './general'

export default combineReducers({
  stats,
  general
})
