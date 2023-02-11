const sharp = require('sharp');

module.exports = (imageSource, width, height, toFile) =>
  sharp(imageSource).resize(width, height).png().toFile(toFile);
