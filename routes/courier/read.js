'use strict'

// const { readAll } = require('../../model')

module.exports = async function (app, opts) {
  app.get('/', async function (request, reply) {

    reply
      .code(404)
      .header()
      .send()
  })
}