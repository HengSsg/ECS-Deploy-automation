const { ObjectId } = require('fastify-mongodb')

module.exports = {
    readAll: async (mongo) => {
        const collection = mongo.db.collection('courier')
        const result = await collection.find({}).toArray()
        return result
      }
}