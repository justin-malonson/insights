/* eslint-disable no-unused-vars */
class Service {
  constructor (options) {
    this.options = options || {}
  }

  async find (params) {
    const { database, config } = require('../../../config/insights')
    const getStructure = require('../../insights/structure')

    const structure = await getStructure(config, database)

    return Promise.resolve(structure)
  }
}

module.exports = function (options) {
  return new Service(options)
}

module.exports.Service = Service
