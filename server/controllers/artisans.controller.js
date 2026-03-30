const artisansServices = require("../services/artisans.services");

exports.getTopArtisans = async (req, res) => {
  try {
    const topArtisans = await artisansServices.getTopArtisans();

    if (topArtisans.length === 0) {
      return res.status(404);
    }

    res.status(200).json(topArtisans);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Erreur lors de la récupération de la liste des top artisans.",
      });
  }
};

exports.getById = async (req, res) => {
  try {
    const artisan = await artisansServices.getById(req.params.id);

    if (!artisan || artisan === null) {
      return res.status(404).json("not found");
    }

    res.status(200).json(artisan);
  } catch (error) {
    res
      .status(500)
      .json({
        message:
          "Erreur lors de la récupération des informations de l'artrisan.",
      });
  }
};

exports.getByName = async (req, res) => {
  try {
    const artisans = await artisansServices.getByName(req.params.name);

    if (artisans.length === 0) {
      return res.status(404).json("not found");
    }

    res.status(200).json(artisans);
  } catch (error) {
    res
      .status(500)
      .json({
        message:
          "Erreur lors de la récupération des informations de l'artrisan.",
      });
  }
};
