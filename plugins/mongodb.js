'use strict'

const fp = require('fastify-plugin')

module.exports = fp(async function (fastify, opts) {
  // if (process.env.NODE_ENV === 'baedal') {
  //   return
  // }
  fastify.register(require('fastify-mongodb'), {
    forceClose: true,
    url: process.env.MONGODB_ENDPOINT
    
  })
  console.log("dbok");
})