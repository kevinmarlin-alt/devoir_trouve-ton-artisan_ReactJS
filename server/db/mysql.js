const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PWD,
  {
    host: process.env.DB_HOST,
    port: 8888,
    dialect: "mysql",
    logging: (...msg) => console.log(msg),
  },
);

const Artisan = require("../models/Artisan")(sequelize, DataTypes);
const Speciality = require("../models/Speciality")(sequelize, DataTypes);
const Category = require("../models/Category")(sequelize, DataTypes);

// Mise en place des relations entre les tables
// Relation 1,n (1 catégorie peut appartenir un plusieurs spécialitées)
Category.hasMany(Speciality, { foreignKey: "category_id" });
Speciality.belongsTo(Category, { foreignKey: "category_id" });

// Relation 1,n (1 spécialité peut appartenir a plusieurs artisans)
Speciality.hasMany(Artisan, { foreignKey: "speciality_id" });
Artisan.belongsTo(Speciality, { foreignKey: "speciality_id" });

const initClientDbConnection = () => {
  sequelize
    .authenticate()
    .then(() => console.log("Connexion à la base de donnée réussie"))
    .catch((err) => console.error("Erreur :", err));
};

module.exports = {
  initClientDbConnection,
  sequelize,
  Artisan,
  Speciality,
  Category,
};
