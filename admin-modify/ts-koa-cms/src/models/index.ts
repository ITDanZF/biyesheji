import { Sequelize } from 'sequelize'
import { config } from '../configuration/config'
import User from './user.model'
const sequelize = new Sequelize('', '', '', {
  dialect: config.DB.TYPE,
  database: config.DB.DATABASE,
  username: config.DB.USERNAME,
  password: config.DB.PASSWORD,
  port: config.DB.PORT,
  host: config.DB.HOST,
})

const models = [User]

models.forEach((model) => {
  model.initModel(sequelize)
})

// sequelize.sync({ force: true})
export default sequelize
