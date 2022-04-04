'use strict'

const fp = require('fastify-plugin')

module.exports = fp(async function (fastify, opts) {
  if (process.env.NODE_ENV === 'test') {
    return
  }
  fastify.register(require('fastify-mongodb'), {
    forceClose: true,
    url: 'mongodb://root:example@teami-loadbalancer-cb78ef30e32ffd53.elb.ap-northeast-2.amazonaws.com:27017/'
  })
})