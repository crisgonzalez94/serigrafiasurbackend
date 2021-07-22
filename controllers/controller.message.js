'use strict'
/*===============================================*/
//Sendgrid
const sgMail = require('@sendgrid/mail')

const API_KEY = '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';

sgMail.setApiKey(API_KEY)






/**Creamos la estructura y la logica de las rutas */
var controller = {


    //Metodo para enviar mensaje
    sendMessage: function( req , res){

        //Recogiendo los parametros para el mensaje

        //Preparando el mensaje
        const message = {
            to: 'cristiannazarenogonzalez@gmail.com',
            from: 'ventas@serigrafiasur.cl',
            subject: 'SerigrafiaSur',
            html: `
                <div style="font-family: Verdana, Geneva, Tahoma, sans-serif">
                    <h1 style="text-align: center">Tienes un mensaje!</h1>
                    <p style="text-transform: capitalize"><strong>Mensaje: </strong>${req.body.mensaje}</p>
                    <hr>
                    <h2>Datos de contacto:</h2>
                    <!--Correo-->
                    <p>
                        <strong>Correo: </strong>
                        <a style="color: orange" href="mailto:${req.body.email}">${req.body.email}</a>
                        <span style="font-size: 12px; color: gray">Click en el correo para enviar mensaje directamente!</span>
                    </p>
                    <!--Whatsapp-->
                    <p>
                        <strong>Numero de telefono: </strong>
                        <a href="https://wa.me/+${req.body.whatsapp}" style="color: orange">+${req.body.whatsapp}</a>
                        <span style="font-size: 12px; color: gray">Click en el correo para enviar Whatsapp directamente! (puede que no este disponible)!</span>


                    </p>

                    <hr>
                    <p style="color: orange ; text-align: center">Recuerde que todo llega en el momento perfecto!</p>

                </div>
            `
        }

        sgMail.send(message).then(response => console.log('Email sent ...')).catch(error => console.log(error.message));

        return res.status(200).send({
            message: 'Enviando mensaje'
        })
   }




}

module.exports = controller;