const { Artisan, Speciality } = require("../db/mysql");
const { Op } = require("sequelize");

exports.getTopArtisans = () => {
  return Artisan.findAll({
    where: { top_artisan: true },
    include: {
      model: Speciality,
      required: true,
      attributes: ["name"],
    },
    attributes: ["id", "rate", "name", "city"],
    order: [["rate", "DESC"]],
  });
};

exports.getById = (id) => {
  const _id = parseInt(id);

  return Artisan.findByPk(_id, {
    attributes: { exclude: ["top_artisan"] },
    include: {
      model: Speciality,
      required: true,
      attributes: ["name"],
    },
  });
};

exports.getByName = (name) => {
  return Artisan.findAll({
    attributes: ["id", "rate", "name", "city"],
    include: {
      model: Speciality,
      required: true,
      attributes: ["name"],
    },
    where: {
      name: {
        [Op.like]: `${name}%`,
      },
    },
    order: [["rate", "DESC"]],
  });
};
