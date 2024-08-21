const express = require("express");
const hbs = require("express-handlebars");
const PORT = process.env.PORT || 3000;
const index = express();

index.engine(".hbs", hbs.engine({ extname: "hbs" }));
index.set("view engine","hbs");
index.set("views","./views");
index.set("views", __dirname + "/views");

index.use(express.static("public"));

index.get("/", function (req,res) {
    res.render("index")
})

index.get("/contacto", function (req,res) {
    res.render("Contacto")
})

index.get("/fotos", function (req,res) {
    res.render("Estas en la Fotografia")
})

index.listen(PORT, function(error) {
    error ? console.log(error) : console.log(`Servidor corriendo en el puerto hppt://localhost:${PORT}`)
})