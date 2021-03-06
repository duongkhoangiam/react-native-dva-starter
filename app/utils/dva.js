import React from 'react'
import { create } from 'dva-core'
import createLoading from 'dva-loading'
import { Provider, connect } from 'react-redux'

export { connect }

export default function(options) {
  const app = create(options)
  // HMR workaround
  if (!global.registered) options.models.forEach(model => app.model(model))
  global.registered = true
  app.use(createLoading())
  app.start()
  // eslint-disable-next-line no-underscore-dangle
  let store = app._store

  app.start = container => () => {
    return <Provider store={store}>{container}</Provider>
  } 
  app.getStore = () => store

  return app
}
