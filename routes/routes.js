'use strict'

var express = require('express');
//Controladores
var PresupuestoController = require('../controllers/controller.presupuesto');
var MessageController = require('../controllers/controller.message');

var router = express.Router();

/*Asociamos las rutas cradas en controllers a una url */
router.get('/home' , PresupuestoController.home);
router.post('/test' , PresupuestoController.test);
router.get('/presupuesto' , PresupuestoController.getPresupuesto);

router.post('/sendmessage' , MessageController.sendMessage);

module.exports = router;
