
var bodyParser = require('body-parser');
var db = require('./models');

var express = require('express');
var PORT = process.env.PORT || 3000;

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//static directory
app.use(express.static("public"));

//routes

require("./routes/burger-api-routes.js")(app);
require("./controllers/burgers_controllers.js")(app);



// Syncing our sequelize models and then starting our Express app
// =============================================================

db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });