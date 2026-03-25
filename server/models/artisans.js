const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/mysql')

const artisan = sequelize.define('artisan', 
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
                min: 0,
                max: 5
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
        tableName: 'artisans',
        timestamps: false
    }
)

module.exports = artisan