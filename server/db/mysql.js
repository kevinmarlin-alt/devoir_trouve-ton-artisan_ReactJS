const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PWD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  logging: (...msg) => console.log(msg)
});

const initClientDbConnection = () => {
    
    sequelize.authenticate()
      .then(() => console.log('Connexion à la base de donnée réussie'))
      .catch(err => console.error('Erreur :', err));
}

module.exports = {
  initClientDbConnection,
  sequelize
}