import React, { useState } from 'react'
import { connect } from 'react-redux'
import { getStats } from '../../actions'
import { RoundedButton, Details, Modal } from '../../components'
import './styles.scss'

const Home = (props) => {
  const [countryInfo, setInfo] = useState('')
  const [sorted, setSort] = useState(false)
  const [details, setDetails] = useState(false)

  const setCountryInfo = (c) => {
    return <Details c={c} />
  }

  const sortCountries = (data) => {
    if (data && data.Countries && data.Countries) {
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
              {i + 1}. {c.Country}
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
        <div className='countries-title'>
          Countries:
        </div>
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
                      setDetails(!details)
                      setInfo(c)
                    }}
                  >
                    {i + 1}. {c.Country}
                  </div>
                )
              })
            : sortCountries(props.data)
        }
        {
          props.data.Countries &&
          <RoundedButton
            className='sort-button'
            text='sort'
            onClick={() => setSort(!sorted)}
          />
        }
      </div>
      {details && setCountryInfo(countryInfo)}
      <Modal />
    </div>
  )
}

const mapStateToProps = (state) => ({
  data: state.stats.data,
})

const mapDispatchToProps = (dispatch) => ({
  getStats: () => dispatch(getStats()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
