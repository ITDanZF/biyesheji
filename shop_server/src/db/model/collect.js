
const { DATE } = require('sequelize')
const seq = require('../seq')
const { STRING, INTEGER, TEXT } = require('../type')

const collect = seq.define('collect', {
  user_id: {
    type: INTEGER,
    allowNull: false,
  },
  goods_id: {
    type: INTEGER,
    allowNull: false,
  },
  createTime: {
    type: DATE,
  },
  flag: {
    type: INTEGER,
  }
} , {
  freezeTableName: true,
  timestamps: false,
})

module.exports = collect