import { combineEpics } from 'redux-observable'
import * as statsEpics from './stats'
import * as generalEpics from './general'

export default combineEpics(
  statsEpics.getStats,
  generalEpics.getModalData,
  generalEpics.getCountryDetails
)


