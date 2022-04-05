'use strict'

const { updateLocation } = require('../../model')

module.exports = async function (app, opts) {
  app.put('/', async function (request, reply) {
   const result = await updateLocation(this.mongo,request.headers.authorization, request.body) 
    reply
      .code(200)
      .header('Content-Type', 'application/json')
      .send(result)
  })
}