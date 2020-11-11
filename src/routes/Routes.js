import React, { Component } from 'react'
import { Route, Router, Switch } from 'react-router'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Home } from '../screens'
import { Details, Modal } from '../components'
import { history } from '../config/stores'

class Routes extends Component {
  render () {
    return (
      <Router history={history}>
        <div className='dashboard-wrap'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/home/:country' component={Modal} />
          </Switch>
          <Modal
            isOpen={this.props.match.params.country !== undefined}
          />
        </div>
      </Router>
    )
  }
}


const mapStateToProps = (state) => ({
  modal: state.general.modalOpen
})

const mapDispatchToProps = (dispatch) => ({
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes))
