import { StatsType } from '../actions'
import { ofType } from 'redux-observable'
import { ajax } from 'rxjs/ajax'
import { switchMap, map, catchError } from 'rxjs/operators'

export const getStats = action$ =>
  action$.pipe(
    ofType(StatsType.GET_STATS),
    switchMap(() => {
      return ajax({
        url: `https://api.covid19api.com/summary`,
        method: 'GET'
      })
        .pipe(
          map(({ response }) => {
            return ({ type: StatsType.GET_STATS_SUCCESS, payload: response })
          }),
          catchError(err => {
            console.log('error', err)
            return ({ type: {}, payload: {} })
          })
        )
    })
  )
