const rootUrl = process.env.ROOT_URL || '/';
const sharp = require('sharp');

exports.saveImage = (imageSource, width, height, toFile) =>
  sharp(imageSource).resize(width, height).png().toFile(toFile);

exports.getImageUrl = (dir) => {
  let url = dir;
  if (!dir.startsWith('http')) {
    url = `${rootUrl}/${dir}`;
  }
  return url;
};
