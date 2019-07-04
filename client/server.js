const express = require('express')
const morgan = require('morgan')

var app = express()
app.use(morgan('dev'))
app.use(express.static(__dirname + '/build'))

app.locals.PREFIX_URL = 'https://eventsbackend.shaastra.org';
app.get('*', (req, res) => {
  res.locals.abc = 'something';
  res.sendFile(__dirname + '/build/index.html');
})

var port = 8080

app.listen(port, () => {
  console.log('====================================');
  console.log(`listening on port ${port}`);
  console.log('====================================');
})