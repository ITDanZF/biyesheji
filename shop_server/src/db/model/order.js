
const { DATE } = require('sequelize')
const seq = require('../seq')
const { STRING, INTEGER, TEXT } = require('../type')

const order = seq.define('order', {
  tel: {
    type: STRING,
    allowNull: false,
  },
  num: {
    type: INTEGER
  },
  title: {
    type: STRING,
    allowNull: false,
  },
  img: {
    type: STRING,
    allowNull: false,
  },
  other: {
    type: STRING,
  },
  xq: {
    type: STRING,
    allowNull: false,
  },
  money: {
    type: INTEGER,
    allowNull: false,
  },
  active: {
    type: INTEGER,
  },
  shopNum: {
    type: INTEGER,
    allowNull: false,
  },
  goods_id: {
    type: INTEGER,
  },
  bianhao: {
    type: STRING,
  },
  spicy: {
    type: STRING,
  },
  fenliang: {
    type: STRING,

  },
  totalMoney: {
    type: INTEGER,

  },
  totalNum: {
    type: INTEGER,
  }
} , {
  freezeTableName: true,
  timestamps: false,
})

module.exports = order