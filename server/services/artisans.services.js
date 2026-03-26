const Artisan = require('../models/Artisan');
const { Op } = require('sequelize');


exports.getTopArtisans = () => {
    return Artisan.findAll({ 
            where: { top_artisan: true }, 
            attributes: ['id' ,'rate', 'name', 'speciality', 'city'],
            order: [['rate', 'DESC']]
        })
}

exports.getById = (id) => {
    const _id = parseInt(id)

    return Artisan.findByPk(_id, {
            attributes: { exclude: ['category', 'top_artisan'] }
        })
}

exports.getByName = (name) => {

    return Artisan.findAll({
            where: { name: {
                [Op.like]: `${name}%`
            }}, 
            attributes: ['id' ,'rate', 'name', 'speciality', 'city'],
            order: [['rate', 'DESC']]
        })
}



