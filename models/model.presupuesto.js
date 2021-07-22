/*Este es la entidad de los datos de la coleccion projects */
'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/*Este es un modelo de los datos que tiene que tener un objeto de tipo projecto a este modelo 
debemos pasarle un json con el nombre de los atributos seguido del tipo de dato que tiene cada elemento*/
var Presupuesto = Schema({
   nombre: String ,
   variosPrecios: Boolean ,
   foto: String ,
   precios: []
});

/**Exportamos nuestro eschema , atencion mongoose a los nombres de las colecciones lo pluraliza y les quita las mayusculas es decir si exportamos con el nombre de "Project" este se llamar "projects" */
module.exports = mongoose.model('Presupuesto' , Presupuesto)