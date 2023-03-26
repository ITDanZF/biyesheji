
const seq = require('../seq')
const { STRING, INTEGER, TEXT } = require('../type')

const user = seq.define('user', {
  userName: {
    type: STRING,
    allowNull: false,
  },
  password: {
    type: STRING,
    allowNull: false,
  },
  gender: {
    type: INTEGER,
  },
  phone: {
    type: STRING,
  },
  picture: {
    type: STRING,
  },
  city: {
    type: STRING,
  },
  province: {
    type: STRING,
  },
  area: {
    type: STRING,
  },
  age: {
    type: INTEGER,
  },
} , {
  freezeTableName: true,
  timestamps: false,
})

module.exports = user