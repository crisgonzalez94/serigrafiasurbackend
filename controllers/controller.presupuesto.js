'use strict'
//Importamos el schema
var Presupuesto = require('../models/model.presupuesto');

/**Creamos la estructura y la logica de las rutas */
var controller = {
   home: function( req , res){
      return res.status(200).send({
         message: 'Soy la home'
      })
   },

   test: function(req , res){
      return res.status(200).send({
         message: 'Soy test controlador del projecto'
      });
   },

    //Enlistar los projectos
    getPresupuesto: function(req , res){
        
        //Metodo de mongoose para buscar un elemento en mongo
        Presupuesto.find( (err , presupuesto) => {

            //Si hay algun error
            if(err) return res.status(500).send({message: 'Error al mostrar los datos'});
            //Si no se encontro
            if(!presupuesto) return res.status(404).send({message: 'El projecto no existe'});
            //Si todo salio bien
            return res.status(200).send({presupuesto})
        });
    
    }
}

module.exports = controller;