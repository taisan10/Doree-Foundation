const fs = require("fs");
const path = require("path");
const { resolvePublicPath } = require("../utils/filePath");
const mime = require("mime-types");


exports.streamImage = (req, res) => {

    try {
  const { folder, file } = req.params;

  const filePath = resolvePublicPath(folder, file);

 


const publicRoot = path.join(__dirname, "..", "public");

if (!filePath.startsWith(publicRoot)) {
  return res.sendStatus(403);
}

 if (!fs.existsSync(filePath)) {
    return res.sendStatus(404);
  }

  const stat = fs.statSync(filePath);
  const fileSize = stat.size;
  const range = req.headers.range;

  const contentType = mime.lookup(filePath) || "application/octet-stream";


  if (range) {
    const [startStr, endStr] = range.replace(/bytes=/, "").split("-");
    const start = parseInt(startStr, 10);
    const end = endStr ? parseInt(endStr, 10) : fileSize - 1;
   

      if (isNaN(start) || isNaN(end) || start >= fileSize) {
        return res.status(416).end();
      }


    res.writeHead(206, {
      "Content-Range": `bytes ${start}-${end}/${fileSize}`,
      "Accept-Ranges": "bytes",
      "Content-Length": end - start + 1,
"Content-Type": contentType,

      "Cache-Control": "public, max-age=31536000",
    });

    fs.createReadStream(filePath, { start, end }).pipe(res);
  } else {
    res.writeHead(200, {
      "Content-Length": fileSize,
"Content-Type": contentType,

      "Cache-Control": "public, max-age=31536000",
    });

    fs.createReadStream(filePath).pipe(res);
  }
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }

};
