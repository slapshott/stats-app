import React, { Component } from 'react'
import { Route, Router, Switch } from 'react-router'
import { withRouter } from 'react-router-dom'
import { Home } from '../screens'
import { history } from '../config/stores'

class Routes extends Component {
  render () {
    return (
      <Router history={history}>
        <div className='dashboard-wrap'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/home' component={Home} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default withRouter(Routes)
