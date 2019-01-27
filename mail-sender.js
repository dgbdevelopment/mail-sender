const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const email_config = require('./email-config');

app.set('port', process.env.PORT || 3100)

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());


app.post('/send-email', (req, res) => {
   console.log(req);
   const formulario = req.body;
   console.log(formulario); 
   email_config(formulario);
   res.status(200).send('Mensaje enviado correctamente');  
});


app.listen(app.get('port'), () => {
   console.log('Server running on port', app.get('port'));
});