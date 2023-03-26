
const { DATE } = require('sequelize')
const seq = require('../seq')
const { STRING, INTEGER, TEXT } = require('../type')

const ratings = seq.define('ratings', {
  user_id: {
    type: STRING,
    allowNull: false,
  },
  rating: {
    type: STRING,
    allowNull: false,
  },
  pic_id_1: {
    type: STRING,

  },
  pic_id_2: {
    type: STRING,

  },
  pic_id_3: {
    type: STRING,
  },
  pic_id_4: {
    type: STRING,
  },
  createTime: {
    type: DATE,
  },
  goods_id: {
    type: INTEGER,
  },
  score: {
    type: INTEGER
  }
}, {
  freezeTableName: true,
  timestamps: false,
})

module.exports = ratings