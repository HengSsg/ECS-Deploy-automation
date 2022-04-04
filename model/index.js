const { ObjectId } = require('fastify-mongodb')
const { MongoCursorInUseError } = require('mongodb')

module.exports = {
    readOrder: async (mongo) => {
        const collection = mongo.db.collection('order')
        const result = await collection.findOne({
            _id:ObjectId("624a7813bad4c4fb9e3bd863")
        })
        return result
      },
    readConsumer: async (mongo,id) => {
        const collection = mongo.db.collection('customer')
        const result = await collection.findOne({
            _id: ObjectId(id)
          })
        return result
      },
    updateLocation: async (mongo,id,body) => {
            const collection = mongo.db.collection('courier')
            const result = await collection.findOneAndUpdate({
                _id: ObjectId(id)
              },{
                $set: body
              })
              return result
          }
}