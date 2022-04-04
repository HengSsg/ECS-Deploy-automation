'use strict'

const { readAll } = require('../../model')

module.exports = async function (app, opts) {
  app.get('/', async function (request, reply) {
    const result = await readAll(this.mongo)
    reply
      .code(200)
      .header('Content-Type', 'application/json')
      .send(result)
  })
}