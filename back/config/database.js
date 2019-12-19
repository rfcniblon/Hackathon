const  mysql = require('mysql');
const  connection = mysql.createConnection({
host :  'localhost', // adresse du serveur
user :  'root', // le nom d'utilisateur
password :  '23Maxtor23$', // le mot de passe
database :  'hackathon2', // le nom de la base de données
});
module.exports = connection;