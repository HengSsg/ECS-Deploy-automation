'use strict'

module.exports = async function (app, opts) {
  app.register(require('./read'))
  app.register(require('./update'))
}