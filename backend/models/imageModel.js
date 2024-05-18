const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  userEmail: { type: String, required: true },
  imageUrl: { type: String, required: true },
  title: { type: String, required: true }
});

const Image = mongoose.model('Image', imageSchema);
module.exports = Image;
