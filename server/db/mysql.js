const { Sequelize } = require('sequelize');

exports.initClientDbConnection = () => {
    const sequelize = new Sequelize('ton_artisan', 'client', process.env.PWD, {
      host: 'localhost',
      dialect: 'mysql',
      logging: (...msg) => console.log(msg)
    });
    
    sequelize.authenticate()
      .then(() => console.log('Connexion réussie'))
      .catch(err => console.error('Erreur :', err));

}