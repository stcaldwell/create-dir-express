const express = require('express');
const app = express();

let data = require('./data.js');

const mustacheExpress = require('mustache-express');
app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

app.get('/', function (req, res) {
  res.render('index.mustache', {data)
})










app.listen(3000, function() {
  console.log('Successfully started express application!')
});
