const express = require('express');
const app = express();

// const cors = require('cors');

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

//app.use(express.static('public'))

// app.use(cors());
// app.options('*', cors())
 


//app.use(express.static(__dirname + '/public'));
console.log(process.env)
const port = process.env.PORT || 8080

var server = app.listen(port, () => {
	console.log('Now listening to port ' + port);
})

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, '/public')));

  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '/public', 'index.html'));
  });
}

const routes = require('./routes');
app.use('/api', routes)
