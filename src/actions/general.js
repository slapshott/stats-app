export const GeneralTypes = {
  SET_ID: 'SET_ID',
  TOGGLE_MODAL: 'TOGGLE_MODAL',
  GET_MODAL_DATA: 'GET_MODAL_DATA',
  GET_MODAL_DATA_SUCCESS: 'GET_MODAL_DATA_SUCCESS',
  SET_COUNTRY: 'SET_COUNTRY',
  GET_BY_COUNTRY: 'GET_BY_COUNTRY',
  GET_BY_COUNTRY_SUCCESS: 'GET_BY_COUNTRY_SUCCESS'
}

export const setId = (payload) => ({
  type: GeneralTypes.SET_ID,
  payload
})

export const toggleModal = () => ({
  type: GeneralTypes.TOGGLE_MODAL
})

export const getModalData = (payload) => ({
  type: GeneralTypes.GET_MODAL_DATA,
  payload
})

export const setCountry = (payload) => ({
  type: GeneralTypes.SET_COUNTRY,
  payload
})

export const getByCountry = (payload) => ({
  type: GeneralTypes.GET_BY_COUNTRY,
  payload
})