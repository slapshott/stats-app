import React from 'react'
import { connect } from 'react-redux'
import { getStats, toggleModal, setCountry, getByCountry } from '../../actions'
import { RoundedButton } from '../RoundedButton'
import { history } from '../../config/stores'
import moment from 'moment'
import './styles.scss'


const Details = (props) => {

  let infoKeys = null
  let infoValues = null

  if (props.c) {
    infoKeys = Object.keys(props.c)
    infoValues = Object.values(props.c)
  }

  const renderCoutryDetails = () => {
    if (props.countryDetails) {
      infoKeys = Object.keys(props.countryDetails)
      infoValues = Object.values(props.countryDetails)
      console.log('hereee:: ', infoKeys, infoValues)
      return infoKeys.map((key, i) => {
        return (
          <div key={i}>
            {`${key}: ${infoValues[i]}`}
          </div>
        )
      })
    }
  }

  return (
    <div className='detailed-info'>
      {
        props.data.Countries
          ? infoKeys.map((key, i) => {
            if (key === 'Premium') {
              return null
            }
            if (key === 'Date') {
              return (
                <div key={i}>
                  {`${key}: ${moment(infoValues[i]).format('DD.MM.YYYY')}`}
                </div>
              )
            }
            return (
              <div key={i}>
                {`${key}: ${infoValues[i]}`}
              </div>
            )
          })
          : renderCoutryDetails()
      }
      <RoundedButton
        className='detailed-button'
        text='View more'
        onClick={() => {
          history.push(`/home/${props.c.Country}`)
          props.toggleModal()
        }}
      />
    </div>
  )
}

const mapStateToProps = (state) => ({
  data: state.stats.data,
  country: state.general.country,
  countryDetails: state.general.countryDetails
})

const mapDispatchToProps = (dispatch) => ({
  getStats: () => dispatch(getStats()),
  toggleModal: () => dispatch(toggleModal()),
  setCountry: (payload) => dispatch(setCountry(payload)),
  getByCountry: (payload) => dispatch(getByCountry(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Details)