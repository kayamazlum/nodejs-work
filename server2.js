const express = require("express");

const app = express();

app.set("view engine", "ejs");
// GET , POST , PUT-PATCH , DELETE -> HTTP METHODS

const products = [
  {
    name: "Telefon",
    id: 0,
    price: 10000,
  },
  {
    name: "Televizyon",
    id: 1,
    price: 20000,
  },
  {
    name: "Bilgisayar",
    id: 2,
    price: 30000,
  },
];

app.use("/about", (req, res) => {
  //   res.send("burası express ile olusan About sayfası");
  res.json({ AA: products });
});
app.use("/", (req, res) => {
  //   res.send("burası express ile olusan anasayfa");
  res.json({ message: "anasatfa" });
});

app.listen(8000, () => {
  console.log("server calistiii : 8000 portu");
});
