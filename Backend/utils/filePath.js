const path = require("path");

exports.resolvePublicPath = (folder, file) => {
  return path.join(__dirname, "..", "public", folder, file);
};
