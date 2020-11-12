import { GeneralTypes } from '../actions'
import { ofType } from 'redux-observable'
import { ajax } from 'rxjs/ajax'
import { switchMap, map, catchError } from 'rxjs/operators'

export const getModalData = action$ =>
  action$.pipe(
    ofType(GeneralTypes.GET_MODAL_DATA),
    switchMap(({ payload }) => {
      return ajax({
        url: `https://api.covid19api.com/country/${payload}/status/confirmed`,
        method: 'GET'
      })
        .pipe(
          map(({ response }) => {
            return ({ type: GeneralTypes.GET_MODAL_DATA_SUCCESS, payload: response[0] })
          }),
          catchError(err => {
            console.log('error', err)
            return ({ type: {}, payload: {} })
          })
        )
    })
  )

export const getCountryDetails = action$ =>
  action$.pipe(
    ofType(GeneralTypes.GET_BY_COUNTRY),
    switchMap(({ payload }) => {
      return ajax({
        url: `https://api.covid19api.com/live/country/${payload}`,
        method: 'GET'
      })
        .pipe(
          map(({ response }) => {
            return ({ type: GeneralTypes.GET_BY_COUNTRY_SUCCESS, payload: response[0] })
          }),
          catchError(err => {
            console.log('error', err)
            return ({ type: {}, payload: {} })
          })
        )
    })
  )
