// const math = require("./math");
// console.log(math.add(1, 2));

// const { add, sub } = require("./math");
// console.log(sub(1, 5));

const fs = require("fs");

// sync : senkron fonk. : blocking :  işlemimiz zaman aldıysa sonraki satırlardaki kodlar bloke olur yani bizim işlem bitmeden aşağıdaki kodlar bekleyecektir
// fs.writeFileSync("log.txt", "test1111");

// async yani asenkron fonk. : non-blocking : işlemimiz devam ederken sonraki satırdaki kodlar çalışır, işlemimiz bitince de en sona eklenir
// fs.writeFile("log.txt", "test2222", (err) => {});

//aşağıda senkron(sync) için bir örnek var
// console.log("1");
// const readF = fs.readFileSync("./log.txt", "utf-8");
// console.log(readF);
// console.log("2");

//burda da asenkron(async)
// console.log("1");
// fs.readFile("log.txt", "utf-8", (err, html) => {
//   console.log(html);
// });
// console.log("2");

// fs.appendFileSync("log.txt", "eleman ekledim"); //ekleme işlemi

// fs.unlinkSync("log.txt"); // dosyayı siler

// fs.unlinkSync("test2/ada"); // klasör oluşturur
