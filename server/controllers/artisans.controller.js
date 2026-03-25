const Artisan = require('../models/artisans');
const { Op } = require('sequelize')

exports.getAllByCategory = async (req, res) => {
    const category = req.params.category
    try {
        const artisans = await Artisan.findAll({ 
            attributes: ['id' ,'rate', 'name', 'speciality', 'city'],
            where: { category: category },
            order: [['rate', 'DESC']]
        })

        if( !artisans ) {
            return res.status(404)
        }

        res.status(200).json( artisans )

    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération de la liste des artisans.'})
    }
};

exports.getTopArtisans = async (req, res) => {
    try {
        const topArtisans = await Artisan.findAll({ 
            where: { top_artisan: true }, 
            attributes: ['id' ,'rate', 'name', 'speciality', 'city'],
            order: [['rate', 'DESC']]
        })
  
        if( !topArtisans ) {
            return res.status(404)
        }

        res.status(200).json( topArtisans )

    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération de la liste des top artisans.'})
    }
}

exports.getCategories = async (req, res) => {
    try {
        const categories = await Artisan.findAll({ 
            attributes: ['category'], 
            group: 'category',
            order: [['category', 'DESC']]
        })

        if( !categories ) {
            return res.status(404)
        }

        res.status(200).json( categories )

    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération de la liste des catégories.'})
    }
}

exports.getById = async (req, res) => {
    const id = parseInt(req.params.id)

    try {
        const artisan = await Artisan.findByPk(id, {
            attributes: { exclude: ['category', 'top_artisan'] }
        })

        if( !artisan || artisan === null ) {
            return res.status(404).json("not found")
        }

        res.status(200).json( artisan )

    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération des informations de l\'artrisan.'})
    }
}

exports.getByName = async (req, res) => {
    const name = req.params.name

    try {
        const artisans = await Artisan.findAll({
            where: { name: {
                [Op.like]: `${name}%`
            }}, 
            attributes: ['id' ,'rate', 'name', 'speciality', 'city'],
            order: [['rate', 'DESC']]
        })

        if( artisans.length === 0 ) {
            return res.status(404).json("not found")
        }

        res.status(200).json( artisans )

    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération des informations de l\'artrisan.'})
    }
}
