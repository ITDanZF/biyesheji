
const { DATE } = require('sequelize')
const seq = require('../seq')
const { STRING, INTEGER, TEXT } = require('../type')

const goods = seq.define('goods', {
  title: {
    type: STRING,
    allowNull: false,
  },
  num: {
    type: INTEGER,
    allowNull: false,
  },
  fenliang: {
    type: STRING,
    allowNull: false,
  },
  money: {
    type: INTEGER,
    allowNull: false,
  },
  xq: {
    type: STRING,
    allowNull: false,
  },
  img_id: {
    type: INTEGER,
    allowNull: false,
  },
  shijian: {
    type: DATE,
    allowNull: false,
  },
  type_id: {
    type: DATE,
    allowNull: false,
  },
  hot: {
    type: DATE,
    allowNull: false,
  },
  bargain_id: {
    type: DATE,
    allowNull: false,
  },
} , {
  freezeTableName: true,
  timestamps: false
})

module.exports = goods