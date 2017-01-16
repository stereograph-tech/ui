var express = require("express");
var bodyParser = require("body-parser");
var cors = require('./cors');

var app = express();

app.use(cors());
app.all('/*', cors());
var routes = require("./routes/routes.js")(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
 
var server = app.listen(3000, function () {
   console.log("Listening on port %s...", server.address().port);
});

app.get('/', function(req, res, next) {
  // Handle the get for this route
});

app.post('/', function(req, res, next) {
 // Handle the post for this route
});