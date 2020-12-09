const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const routes = require('./routes')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('App is working'))

app.use('/api', routes)

app.listen(process.env.PORT || 3000, () => console.log('Example app listening on port 3000!'))

module.exports = {
  app
}