import React, { Component } from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Home } from '../screens'
import { history } from '../config/stores'

class Routes extends Component {
  render () {
    return (
      <BrowserRouter history={history}>
        <div className='dashboard-wrap'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/home/:country?' component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}


const mapStateToProps = (state) => ({
  modal: state.general.modalOpen
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Routes)
