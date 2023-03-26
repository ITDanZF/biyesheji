
const { DATE } = require('sequelize')
const seq = require('../seq')
const { STRING, INTEGER, TEXT } = require('../type')

const good_type = seq.define('good_type', {
  type: {
    type: STRING,
    allowNull: false,
  }
} , {
  freezeTableName: true,
  timestamps: false
})

module.exports = good_type