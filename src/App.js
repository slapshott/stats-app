import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { store } from './config/stores'
import './fontello/css/fontello.css'
import Routes from './routes/Routes'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    )
  }
}

export default App
