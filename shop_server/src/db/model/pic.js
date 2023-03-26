
const seq = require('../seq')
const { STRING, INTEGER, TEXT } = require('../type')

const pic = seq.define('pic', {
  image: {
    type: STRING,
  },
  goodId: {
    type: INTEGER,
  }
}, {
  freezeTableName: true,
  timestamps: false,
})

module.exports = pic