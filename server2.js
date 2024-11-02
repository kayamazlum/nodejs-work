const express = require("express");

const app = express();

app.use(express.static("public")); // statik dosyalar için eklenen express özelliği

app.set("view engine", "ejs");
// GET , POST , PUT-PATCH , DELETE -> HTTP METHODS

const products = [
  {
    name: "Telefon",
    id: 1,
    price: 10000,
  },
  {
    name: "Televizyon",
    id: 2,
    price: 20000,
  },
  {
    name: "Bilgisayar",
    id: 3,
    price: 30000,
  },
];

app.use("/detail/:id", (req, res) => {
  //   res.send("burası express ile olusan About sayfası");
  //   res.json({ AA: products });
  const detailProduct = products.find((pr) => pr.id == req.params.id);
  res.render("detail", { detailProduct });
});

app.use("/", (req, res, next) => {
  console.log("bur bir middleware (ara yazılım/katman) dir");
  next();
});

app.use("/", (req, res) => {
  //   res.send("burası express ile olusan anasayfa");
  //   res.json({ message: "anasayfa" });
  //   res.render({ products: products });
  res.render("products", { products });
});

app.listen(8000, () => {
  console.log("server calistiii : 8000 portu");
});
