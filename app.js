'use strict'
/*===============================================
Importando dependencias
===============================================*/
var express = require('express');
var bodyParser = require('body-parser');

var app = express();



/*===============================================
Cargar archivos de rutas
==============================================*/
var routes = require('./routes/routes')

/*===============================================
Midlewares
===============================================*/
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//CORS
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


/*================================================
Rutas
==========================================*/
//A partir de ahora las rutas tendran un api delante (/api/home)
app.use('/api' , routes);

/*===============================================
Exportar
==============================================*/
module.exports = app;
