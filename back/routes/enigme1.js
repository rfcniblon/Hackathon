'use strict';
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const connection = require("../config/database");
const mysql = require('mysql');
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

//récupération de l'intégralité de la Table enigmes
router.get('/', (req, res) => {
    connection.query('SELECT * FROM enigmes',
      (err, results) => {
        if (err) {
          console.log('Dommage!');
        } else {
          console.log('Table enigmes recupéré avec succés');
          res.json(results);
        }
      });
  });
  // selection d'une enigme suivant id
router.get("/:id", (req, res) => {
    const idEnigmesOne = parseInt(req.params.id);
    const sql = "SELECT * FROM enigmes WHERE id = ? ";
    connection.query(sql, idEnigmesOne, (error, results, fields) => {
      if (error) {
        res.status(501).send("couldn't get blog");
        console.log('Dommage!');
      } else {
        console.log("selection d'une enigme suivant l'id recupéré avec succés");
        res.json(results);
      }
    });
  });
 
module.exports = router;