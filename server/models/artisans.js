const { sequelize, DataTypes } = require('sequelize');
const sequelize = require('../app')

const Artisan = sequelize.define('Artisan', 
    {
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true
        },
        speciality: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        rate: {
            type: DataTypes.DECIMAL(2,1),
            allowNull: false,
            defaultValue: 0,
            validate: {
                min: 0
            }
        },
        city: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        about: {
            type: DataTypes.STRING(1000),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
                notEmpty: true
            }
        },
        website: {
            type: DataTypes.STRING(255),
            unique: true
        },
        category: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        top_artisan: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    },
    {
        tableName: 'artisans'
    }
)

module.exports = Artisan