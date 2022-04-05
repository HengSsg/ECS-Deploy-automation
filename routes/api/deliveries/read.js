'use strict'

const { readOrder, readConsumer } = require('../../../model')

module.exports = async function (app, opts) {
  app.get('/', async function (request, reply) {
    const order = await readOrder(this.mongo)
    const consumer = await readConsumer(this.mongo, order.consumer_id)

    const result = {
      "_id" : order._id,
      "source" : order.restaurant,
      "destination" : {
        "address" : consumer.address
      },
      "assignedCourier" : order.deliveryInfo.assignedCourier,
      "status" : order.deliveryInfo.status
    }
    reply
      .code(200)
      .header('Content-Type', 'application/json')
      .send(result)
  })
}