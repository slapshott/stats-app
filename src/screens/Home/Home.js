import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getStats } from '../../actions'
import './styles.scss'

const Home = (props) => {

  useEffect(() => {
    props.getStats()
  }, [])

  return (
    <div className='home-main-container'>
      Levski
    </div>
  )
}

const mapStateToProps = () => ({
})

const mapDispatchToProps = (dispatch) => ({
  getStats: () => dispatch(getStats())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
