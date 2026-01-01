const fs = require("fs");
const path = require("path");
const { resolvePublicPath } = require("../utils/filePath");

exports.streamImage = (req, res) => {
  const { folder, file } = req.params;

  const filePath = resolvePublicPath(folder, file);

  if (!fs.existsSync(filePath)) {
    return res.sendStatus(404);
  }

  const stat = fs.statSync(filePath);
  const fileSize = stat.size;
  const range = req.headers.range;

  if (range) {
    const [startStr, endStr] = range.replace(/bytes=/, "").split("-");
    const start = parseInt(startStr, 10);
    const end = endStr ? parseInt(endStr, 10) : fileSize - 1;

    res.writeHead(206, {
      "Content-Range": `bytes ${start}-${end}/${fileSize}`,
      "Accept-Ranges": "bytes",
      "Content-Length": end - start + 1,
      "Content-Type": "image/jpeg",
      "Cache-Control": "public, max-age=31536000",
    });

    fs.createReadStream(filePath, { start, end }).pipe(res);
  } else {
    res.writeHead(200, {
      "Content-Length": fileSize,
      "Content-Type": "image/jpeg",
      "Cache-Control": "public, max-age=31536000",
    });

    fs.createReadStream(filePath).pipe(res);
  }
};
