// request -> server -> response(+/-)
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  fs.appendFile("log.txt", req.url, (err, html) => {
    if (err) {
      throw new Error("hataaaaaaaaaaaa");
    } else {
      switch (req.url) {
        case "/":
          res.end("ana sayfa");
          break;
        case "/about":
          res.end("hakkımda");
          break;
        default:
          res.end("404 - Böyle bir sayfa yok");
      }
    }
  });
});

server.listen(8000, () => {
  console.log("server çalıştı : 8000");
});
