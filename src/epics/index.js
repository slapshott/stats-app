import { combineEpics } from 'redux-observable'
import * as statsEpics from './stats'

export default combineEpics(
  statsEpics.getStats
)
