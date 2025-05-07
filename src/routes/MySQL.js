const { error } = require("console");
const { Router } = require("express");
const router = Router();
const mysql = require("mysql");

//Create MySQL conexion
const db = mysql.createConnection({
  host: "fdb1030.awardspace.net",
  user: "4630702_prueba",
  password: "g/[T/exn4P^^]Nd9",
  database: "4630702_prueba",
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
router.get("/POSTMySQL", (req, res) => {
  let post = { nombre: "UsuarioNODE", pass: UsuarioNODE };
  let sql = "INSERT INTO Usuarios SET ?";
  let query = db.query(sql, post, (err, result) => {
    console.log(result);
    res.json(result);
  });
});

module.exports = router;
