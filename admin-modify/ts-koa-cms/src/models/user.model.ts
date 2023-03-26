import { DataTypes, Model, Sequelize } from 'sequelize'

export default class User extends Model {
    id!: number

    nick!: string

    mobile!: string

    password!: string

    created_at!: Date

    updated_at!: Date

    static initModel (sequelize: Sequelize) {
        User.init(
            {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: DataTypes.BIGINT(
                        {
                            unsigned: true
                        }
                    ),
                },
                nick: {
                    allowNull: false,
                    unique: true,
                    type: DataTypes.STRING,
                    comment: '昵称'
                },
                mobile: {
                    allowNull: false,
                    unique: true,
                    type: DataTypes.STRING,
                    comment: '手机号'
                },
                password: {
                    allowNull: true,
                    unique: true,
                    type: DataTypes.STRING,
                    comment: '用户密码'
                },
                created_at: {
                    allowNull: true,
                    type: DataTypes.DATE,
                    defaultValue: Sequelize.fn('now')
                },
                updated_at: {
                    allowNull: true,
                    type: DataTypes.DATE,
                    defaultValue: Sequelize.fn('now')
                }
            },
            {
                tableName: 'tb_user',
                freezeTableName: true,
                timestamps: false,
                sequelize,
            }
        )
    }
}
