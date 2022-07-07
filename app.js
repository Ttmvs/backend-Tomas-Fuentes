const fs = require("fs");

const funcionGuardada = () =>{
    const date = new Date(Date.now()).toDateString();
    fs.writeFileSync("./files/fyh.txt", date);
}

const Leer = () =>{
    try{
        const data = fs.readFileSync("./files/fyh.txt", "utf-8");
        console.log(data)
    }catch(err){
        throw new Error("Not Found")
    }
}

funcionGuardada();
Leer();