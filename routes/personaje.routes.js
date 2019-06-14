var express = require('express');
var UsuarioController = require('../controllers/personaje.controller');
var api = express.Router();


api.get('/personajes',UsuarioController.GetAll);
api.get('/testeo',UsuarioController.ETL);
api.get('/personajes/:id',UsuarioController.GetAid);


module.exports = api;