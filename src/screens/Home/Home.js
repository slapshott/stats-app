import React, { useState } from 'react'
import { connect } from 'react-redux'
import { getStats } from '../../actions'
import { RoundedButton } from '../../components'
import moment from 'moment'
import './styles.scss'

const Home = (props) => {
  const [countryInfo, setInfo] = useState('')
  const [sorted, setSort] = useState(false)

  const setCountryInfo = (c) => {
    const infoKeys = Object.keys(c)
    const infoValues = Object.values(c)
    return (
      <div>
        {infoKeys.map((key, i) => {
          if (key === 'Premium') return
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
        })}
      </div>
    )
  }

  const sortCountries = (data) => {
    if (data && data.Countries && data.Countries) {
      // console.log(data.sort((a, b) => b.NewConfirmed - a.NewConfirmed))
      return data.Countries
        .slice(0, 15)
        .sort((a, b) => b.NewConfirmed - a.NewConfirmed)
        .map((c, i) => {
          return (
            <div
              key={i}
              className='element'
              onClick={() => {
                setInfo(c)
              }}
            >
              {c.Country}
            </div>
          )
        })
    }
    return null
  }


  return (
    <div className='home-main-container'>
      <RoundedButton
        className='stats-button'
        text='Show stats'
        onClick={() => {
          props.getStats()
        }}
      />
      <div className='countries-container'>
        Countries:
        {
          props.data && props.data.Countries && !sorted
            ?
            props.data.Countries
              .slice(0, 15)
              .map((c, i) => {
                return (
                  <div
                    key={i}
                    className='element'
                    onClick={() => {
                      setInfo(c)
                    }}
                  >
                    {c.Country}
                  </div>
                )
              })
            : sortCountries(props.data)
        }
        <RoundedButton
          className='sort-button'
          text='sort'
          onClick={() => setSort(!sorted)}
        />
      </div>
      <div>
        {setCountryInfo(countryInfo)}
      </div>

    </div>
  )
}

const mapStateToProps = (state) => ({
  data: state.stats.data
})

const mapDispatchToProps = (dispatch) => ({
  getStats: () => dispatch(getStats())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
