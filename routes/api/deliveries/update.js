'use strict'

const { readOrder, readConsumer,updateOrderAcceptance, updateOrderStatus } = require('../../model')

module.exports = async function (app, opts) {
  app.put('/:id/acceptance', async function (request, reply) {
    const updateOrder = await updateOrderAcceptance(this.mongo, request.params.id)
    const order = await readOrder(this.mongo)
    const consumer = await readConsumer(this.mongo, order.consumer_id)
    

    const result = {
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

  app.patch('/:id/status', async function (request, reply) {
    const updateOrder = await updateOrderStatus(this.mongo, request.params.id, request.body)
    const order = await readOrder(this.mongo)
    const consumer = await readConsumer(this.mongo, order.consumer_id)
    

    const result = {
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