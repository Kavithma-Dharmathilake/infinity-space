const Image = require('../models/imageModel');

exports.saveImage = async (req, res) => {
    const { userEmail, imageUrl, title } = req.body;

    try {
        const newImage = new Image({ userEmail, imageUrl, title });
        const savedImage = await newImage.save();
        res.status(201).json(savedImage);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

exports.getSavedImages = async (req, res) => {
    const { userEmail } = req.params;

    try {
        const images = await Image.find({ userEmail });
        res.status(200).json(images);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

exports.deleteImage = async (req, res) => {
  const { id } = req.params;

  try {
    await Image.findByIdAndDelete({ _id: id });
      res.status(200).json({ message: 'Image deleted successfully' });
  } catch (error) {
    console.log('errror here')
      res.status(500).json({ message: 'Server Error', error });
      
  }
};

