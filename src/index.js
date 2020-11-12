import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './config/globals'

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
registerServiceWorker()
