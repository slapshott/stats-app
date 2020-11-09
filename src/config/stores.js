import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import epics from '../epics'
import reducers from '../reducers'

const history = require('history').createBrowserHistory()

const epicMiddleware = createEpicMiddleware()

let store = {}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const createStoreWithMiddleware = composeEnhancers(applyMiddleware(epicMiddleware))(createStore)

store = createStoreWithMiddleware(reducers)

epicMiddleware.run(epics)

export { store, history }
