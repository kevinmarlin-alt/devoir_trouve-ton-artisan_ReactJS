const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ton_artisan', 'client', process.env.PWD, {
  host: 'localhost',
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