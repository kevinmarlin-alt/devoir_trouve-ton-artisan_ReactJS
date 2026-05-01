const categoriesServices = require("../services/categories.services");
const { validationResult } = require("express-validator");

exports.getAllByCategory = async (req, res) => {
  const errors = validationResult(req)
  if(!errors.isEmpty()) {
    return res.status(400).json({ message: "Erreur lors de la récupération de la liste des artisans." })
  }

  const idCategory = req.params.idCategory;
  try {
    const artisans = await categoriesServices.getAllByCategory(idCategory);

    if (artisans.length === 0) {
      return res.status(404);
    }

    res.status(200).json(artisans);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Erreur lors de la récupération de la liste des artisans."
      });
  }
};

exports.getCategories = async (req, res) => {
  try {
    const categories = await categoriesServices.getCategories();

    res.status(200).json(categories);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Erreur lors de la récupération de la liste des catégories.",
      });
  }
};
