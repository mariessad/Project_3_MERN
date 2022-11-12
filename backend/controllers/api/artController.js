const Art = require("../../models/artModel");

// get all art
exports.getAllArt = async (req, res) => {
  const allArt = await Art.find({});
  res.status(200).json(allArt);
};

// get a single art

exports.getArt = async (req, res) => {
  const { id } = req.params;

  const art = await Art.findById(id);

  if (!art) {
    return res.status(404).json({ error: "no such art" });
  }

  res.status(200).json(art);
};

// create a new art

exports.createArt = async (req, res) => {
  const { title, price, image } = req.body;

  try {
    const art = await Art.create({ title, price, image });
    res.status(200).json(art);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// update an art
exports.updateArt = async (req, res) => {
  const { id } = req.params;

  const art = await Art.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!art) {
    return res.status(404).json({ error: "no such art" });
  }

  res.status(200).json(art);
};

// delete an art
exports.deleteArt = async (req, res) => {
  const { id } = req.params;

  const art = await Art.findOneAndDelete({ _id: id });

  if (!art) {
    return res.status(404).json({ error: "no such art" });
  }

  res.status(200).json(art);
};
