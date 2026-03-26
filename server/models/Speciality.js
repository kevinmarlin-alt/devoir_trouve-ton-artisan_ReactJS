const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/mysql')

const Speciality = sequelize.define('speciality',
    {
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true
        },
        category_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        tableName: 'specialities',
        timestamps: false
    }
)

module.exports = Speciality