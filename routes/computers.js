var express = require('express');
var router = express.Router();
const db = require('../database/config')();

router.get('/', function(req, res) {
  
  db.query('SELECT * FROM computers').then(function(rows){
    res.json(rows[0]); 
  });

});

router.post('/', function(req, res){
  let formData = req.body;

  let query = `INSERT INTO computers (memoria_ram, hd, sistema_operacional, fabricante) VALUES ('${formData.memoria_ram}', '${formData.hd}', '${formData.sistema_operacional}', '${formData.fabricante}')`;

  db.query(query)
  .then(function(data){
    res.json(data);
  });

});

router.put('/', function(req, res){

  let formData = req.body;
  let query = `UPDATE computers SET memoria_ram = ${formData.memoria_ram}, hd = ${formData.hd}, sistema_operacional = '${formData.sistema_operacional}', fabricante = '${formData.fabricante}' WHERE id = ${formData.id}`;

  db.query(query)
  .then(function(result){
    res.json(result);
  });
});

router.delete('/:id', function(req, res){
  let query = `DELETE FROM computers WHERE id = ${req.params.id}`;

  db.query(query)
  .then(function(result){
    res.json(result);
  });

});

router.get('/:id', function(req, res){
  let query = `SELECT * FROM computers WHERE id = ${req.params.id}`;

  db.query(query)
  .then(function(data){
    res.json(data[0][0]);
  });

});

module.exports = router;

