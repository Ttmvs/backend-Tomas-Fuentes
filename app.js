const fs = require("fs");
const data = fs.readFileSync("./files/file.txt", "utf-8" );
const dataDos = fs.writeFileSync("./files/file.txt", "Holaaaaa")
console.log(data)