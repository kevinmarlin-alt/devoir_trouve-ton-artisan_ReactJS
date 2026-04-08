module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "artisan",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
      },
      speciality_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      rate: {
        type: DataTypes.DECIMAL(2, 1),
        allowNull: false,
        defaultValue: 0,
        validate: {
          min: 0,
          max: 5,
        },
        get() {
          const rawValue = this.getDataValue("rate");
          return parseFloat(rawValue);
        },
      },
      city: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      about: {
        type: DataTypes.STRING(1000),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
          notEmpty: true,
        },
      },
      website: {
        type: DataTypes.STRING(255),
        unique: true,
        validate: {
          isUrl: true,
        },
      },
      top_artisan: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      tableName: "artisans",
      timestamps: false,
    },
  );
};
