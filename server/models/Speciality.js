module.exports = (sequelize, DataTypes) => {
    return sequelize.define('speciality',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
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
} 