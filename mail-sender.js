const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const https = require('https');
const fs = require('fs');

const app = express();
const email_config = require('./email-config');

app.set('port', process.env.PORT || 3100)

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


app.post('/send-email', (req, res) => {
   const formulario = req.body;
   email_config(formulario);
   res.status(200).send();
});


https.createServer({
   key: fs.readFileSync(path.join(__dirname, '../..', 'my_certs', 'ssl.mailer.dgbdevelopment.com.key')),
   cert: fs.readFileSync(path.join(__dirname, '../..', 'my_certs','ssl.mailer.dgbdevelopment.com.crt'))
}, app).listen(app.get('port'), () => {
   console.log('Server on port', app.get('port'));
});