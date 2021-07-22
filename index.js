'use strict'
/*===============================================
Importando dependencias
===============================================*/
var mongoose = require('mongoose');
//Importar el script app.js
var app = require('./app');

/*===============================================
Settings
===============================================*/
app.set('port' , 3700);

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/serigrafiasur')
  .then(()=>{
    console.log("Conexion a la base de datos establecida con exito...")

//Crear el servidor
app.listen(app.get('port') , ()=> {
        console.log("Servidor corriendo correctamente en el puerto " , app.get('port'))
    });
}).catch(err => console.log("Chingada madre" , err));