import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './config/globals'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
registerServiceWorker()
