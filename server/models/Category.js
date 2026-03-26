const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/mysql')

const Category = sequelize.define('category',
    {
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true
        }
    },
    {
        tableName: 'categories',
        timestamps: false
    }
)

module.exports = Category