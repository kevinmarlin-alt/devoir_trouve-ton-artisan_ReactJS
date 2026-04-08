const categoriesServices = require("../services/categories.services");

exports.getAllByCategory = async (req, res) => {
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
        message: "Erreur lors de la récupération de la liste des artisans.",
      });
  }
};

exports.getCategories = async (req, res) => {
  try {
    const categories = await categoriesServices.getCategories();

    // if (categories.length === 0) {
    //   return res.status(404);
    // }

    res.status(200).json(categories);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Erreur lors de la récupération de la liste des catégories.",
      });
  }
};
