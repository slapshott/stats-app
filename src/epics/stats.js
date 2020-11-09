import { StatsType } from '../actions'
import { ofType } from 'redux-observable'
import { ajax } from 'rxjs/ajax'
import { switchMap, map, catchError } from 'rxjs/operators'

export const getStats = action$ =>
  action$.pipe(
    ofType(StatsType.GET_STATS),
    switchMap(() => {
      console.log('HEREE::')
      return ajax({
        url: `https://covid19api.com/`,
        method: 'GET',
        headers: {
          'Server': 'nginx/1.14.0 (Ubuntu)',
          'Date': 'Sun, 05 Apr 2020 06:37:34 GMT',
          'Content-Type': 'application/json; charset=UTF-8',
          'Content-Length': '843',
          'Connection': 'keep-alive',
          'Access-Control-Allow-Credentials': 'true',
          'Access-Control-Allow-Origin': '',
          'Access-Control-Expose-Headers': 'Content-Length',
          'Content-Encoding': 'gzip',
          'Strict-Transport-Security': 'max-age=5184000; includeSubDomains',
          'Vary': 'Origin',
          'Vary': 'Accept-Encoding',
          'X-Content-Type-Options': 'nosniff',
          'X-Dns-Prefetch-Control': 'off',
          'X-Download-Options': 'noopen',
          'X-Frame-Options': 'DENY',
          'X-Rate-Limit-Duration': '1',
          'X-Rate-Limit-Limit': '3.00',
          'X-Rate-Limit-Request-Forwarded-For': '',
          'X-Rate-Limit-Request-Remote-Addr': '127.0.0.1:60164',
          'X-Request-Id': 'b5c5b7fd-a17b-4e26-93bd-a1f2fe771424',
          'X-Xss-Protection': '1; mode=block',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials': true,
          'Access-Control-Allow-Origin': '',
          'Access-Control-Expose-Headers': 'Content-Length'
        }
      })
        .pipe(
          map(({ response }) => {
            console.log('response::: ', response)
            // return ({ type: StatsType.GET_STATS_SUCCESS, payload: response })
          }),
          catchError(err => {
            console.log('error', err)
            // return ({ type: {}, payload: {} })
          })
        )
    })
  )
