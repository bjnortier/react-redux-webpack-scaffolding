import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import rootReducer from './reducers'
import CounterContainer from './containers/CounterContainer'

// ----- Redux -----
const reduxLogger = true
const middlewares = reduxLogger ? [thunkMiddleware, createLogger()] : thunkMiddleware
const configureStore = (preloadedState) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middlewares)
  )
  return store
}
const store = configureStore({})

// ----- Top-level React component -----
render(
  (<Provider store={store}>
    <CounterContainer />
  </Provider>),
  document.getElementById('root')
)
