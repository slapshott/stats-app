import { GeneralTypes } from '../actions'

const initialState = {
  id: null,
  modalOpen: false,
  modalData: null,
  country: null,
  countryDetails: null
}

const general = (state = initialState, { type, payload }) => {
  switch (type) {
    case GeneralTypes.SET_ID:
      return { ...state, id: payload }

    case GeneralTypes.TOGGLE_MODAL:
      return { ...state, modalOpen: !state.modalOpen }

    case GeneralTypes.GET_MODAL_DATA_SUCCESS:
      return { ...state, modalData: payload }

    case GeneralTypes.SET_COUNTRY:
      return { ...state, country: payload }

    case GeneralTypes.GET_BY_COUNTRY_SUCCESS:
      return { ...state, countryDetails: payload }


    default:
      return state
  }
}

export default general
