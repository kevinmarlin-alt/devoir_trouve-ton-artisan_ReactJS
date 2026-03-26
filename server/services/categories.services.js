const Artisan = require('../models/Artisan');

exports.getCategories = () => {
    return Artisan.findAll({ 
            attributes: ['category'], 
            group: 'category',
            order: [['category', 'ASC']]
        })
}

exports.getAllByCategory = (category) => {
    return Artisan.findAll({ 
            attributes: ['id' ,'rate', 'name', 'speciality', 'city'],
            where: { category: category },
            order: [['rate', 'DESC']]
        })
}