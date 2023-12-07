var http = require("http");
var fs = require("fs");
var path = require("path");

http
  .createServer(function (req, res) {
    let filePath = "." + req.url;

    if (filePath === "./") {
      filePath = "./index.html";
    }

    const extname = path.extname(filePath);
    let contentType = "text/html";

    switch (extname) {
      case ".js":
        contentType = "text/javascript";
        break;
      case ".css":
        contentType = "text/css";
        break;
      case ".png":
        contentType = "image/png";
        break;
      case ".svg":
        contentType = "image/svg+xml";
        break;
      // Puedes agregar más casos según las extensiones de archivos que necesites manejar
    }

    fs.readFile(filePath, function (err, data) {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Error interno del servidor");
      } else {
        res.writeHead(200, { "Content-Type": contentType });
        res.end(data);
      }
    });
  })
  .listen(1337, "127.0.0.1");

console.log("Server running at http://127.0.0.1:1337/");
