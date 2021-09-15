const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const busboy = require('connect-busboy');
const app = express();
const routes = require('./routes');
const swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json');

app.use(busboy());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get('*', (req, res) => res.redirect('/swagger'));
app.use('/api', routes);

app.listen(process.env.PORT || 3000, () => console.log('Example app listening on port 3000!'));

module.exports = {
  app
}