
const seq = require('../seq')
const { STRING, INTEGER, TEXT } = require('../type')

const bargains = seq.define('bargains', {
  name: {
    type: STRING,
    allowNull: false,
  },
  bargain: {
    type: INTEGER,
    allowNull: false,
  },
  bar_picId: {
    type: INTEGER,
  }
} , {
  freezeTableName: true,
  timestamps: false,
})

module.exports = bargains