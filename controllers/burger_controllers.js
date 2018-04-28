// Dependencies
var express = require('express');

// Create a routher using express
var router = express.Router();

var db = require('../models/');// Route to sequelized Burger

// Route for getting all burger info stored in db
router.get("/", function(req, res) {
  db.Burger.findAll({}).then(function(data) {
    console.log(data);
    res.render("index", {burgers: data});
  });
});

// Route for posting new burger / Creating a new burger
router.post("/burger/create", function(req, res) {
  db.Burger.create({
    burger_name: req.body.burger_name
  }).then(function(addBurger) {
    console.log(addBurger);
    res.redirect("/");
  });
});

// Route for update a burger status to "devoured"
router.put('/burger/update/:id', function (req, res) {
  db.Burger.update({
    devoured: true,
  }, {
    where: {
      id: req.params.id
    }
  }).then(function() {
    res.redirect("/");
    });
});

module.exports = router;