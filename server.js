// request -> server -> response(+/-)
const http = require("http");

const server = http.createServer((req, res) => {
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
});

server.listen(8000, () => {
  console.log("server çalıştı : 8000");
});
