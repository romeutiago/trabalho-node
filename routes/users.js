var express = require('express');
var router = express.Router();
const db = require('../database/config')();

router.get('/', function(req, res) {
  
  db.query('SELECT * FROM users').then(function(rows){
    res.json(rows[0]); 
  });

});

router.post('/', function(req, res){
  let formData = req.body;

  let query = `INSERT INTO users (nome, email, idade, profissao) VALUES ('${formData.nome}', '${formData.email}', '${formData.idade}', '${formData.profissao}')`;

  db.query(query)
  .then(function(data){
    res.json(data);
  });

});

router.put('/', function(req, res){

  let formData = req.body;
  let query = `UPDATE users SET nome = '${formData.nome}', email = '${formData.email}', idade = ${formData.idade}, profissao = '${formData.profissao}' WHERE id = ${formData.id}`;

  db.query(query)
  .then(function(result){
    res.json(result);
  });
});

router.delete('/:id', function(req, res){
  let query = `DELETE FROM users WHERE id = ${req.params.id}`;

  db.query(query)
  .then(function(result){
    res.json(result);
  });

});

router.get('/:id', function(req, res){
  let query = `SELECT * FROM users WHERE id = ${req.params.id}`;

  db.query(query)
  .then(function(data){
    res.json(data[0][0]);
  });

});

module.exports = router;

