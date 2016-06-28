var express = require('express');
var bodyParser = ("body-parser");
var app = express();

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
 
app.get('/', function (req, res) {
  res.send('Hello World');
});

// app.post('/', function (req, res) {
//   res.send(req.body.parse);
// });
 
app.listen(3000, function () {
	console.log('Server is run!!!');
});