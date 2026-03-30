const { Op } = require("sequelize");
const { Category, Artisan, Speciality } = require("../db/mysql");

exports.getCategories = () => {
  return Category.findAll({
    order: [["name", "ASC"]],
  });
};

exports.getAllByCategory = (idCategory) => {
  return Artisan.findAll({
    attributes: { exclude: ["speciality_id", "top_artisan"] },
    include: {
      model: Speciality,
      required: true,
      attributes: ["name"],
      include: {
        model: Category,
        required: true,
        attributes: ["name"],
        where: { id: idCategory },
      },
    },
  });
};
