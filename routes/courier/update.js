'use strict'

const { updateOne } = require('../../model')

module.exports = async function (app, opts) {
  app.put('/', async function (request, reply) {
    const result = await updateOne(this.mongo, request.headers.authorization) 
    reply
      .code(200)
      .header('Content-Type', 'application/json')
      .send(result)
  })
}