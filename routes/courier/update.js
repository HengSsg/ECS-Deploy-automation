'use strict'

// const { updateOne } = require('../../model')

module.exports = async function (app, opts) {
  app.put('/:id', async function (request, reply) {
      
    reply
      .code(404)
      .header()
      .send()
  })
}