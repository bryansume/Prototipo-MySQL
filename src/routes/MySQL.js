const { error } = require("console");
const { Router } = require("express");
const router = Router();
const mysql = require("mysql");

//Create MySQL conexion
const db = mysql.createConnection({
  //En esta ocasión probamos en local aver si funciona corectamente
  host: "localhost",
  user: "root",
  password: "",
  database: "PI_010_MySQL",
});
db.connect((error) => {
  if (error) {
    console.log("error" + error);
  } else {
    console.log("Conexión establecida");
  }
});

//GET
router.get("/GETMySQL", (req, res) => {
  console.log(db);
  let sql = "SELECT * FROM Usuarios";
  let query = db.query(sql, (err, result) => {
    console.log(result);
    res.json(result);
  });
});

//POST
router.post("/POSTMySQL", (req, res) => {
  // Se insertara lo siguiente a la base de datos
  let post = { nombre: "UsuarioConXAMPP", pass: "UsuarioConXAMPP" };
  let sql = "INSERT INTO Usuarios SET ?";
  let query = db.query(sql, post, (err, result) => {
    console.log(result);
    res.json(result);
  });
});

module.exports = router;
