const nodemailer = require('nodemailer');
const secret = require('./secret');

module.exports = (formulario) => {
   const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
         user: secret.mail, // Cambialo por tu email
         pass: secret.password // Cambialo por tu password
      }
   });

   const mailOptions = {
      from: `”${formulario.name}” <${formulario.email}>`,
      to: secret.recipe, // Cambia esta parte por el destinatario
      subject: "Mensaje desde la web Chok-Auto",
      html: `
            <strong>Nombre:</strong> ${formulario.name} <br/>
            <strong>E-mail:</strong> ${formulario.email} <br/>
            <strong>Mensaje:</strong> ${formulario.text}
            `
   };
   transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
         return console.log(err);
          
      }
      console.log(info);
   });
}