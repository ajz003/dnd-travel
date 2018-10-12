// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");
var connection = require("../config/connection.js");
var Sequelize = require('sequelize');

let charOutfit = {
  hat: "",
  torso: "",
  leg: "",
  wings: ""
}
// Routes
// =============================================================
module.exports = function (app) {

  app.get("/api/enemy/count", function (req, res) {
    db.Enemy.count()
      .then(function (count) {
        res.json(count);
      });
  });

  // Get route for retrieving a single enemy
  app.get("/api/enemy/:position", function (req, res) {
    db.Enemy.findOne({
        where: {
          position: req.params.position
        }
      })
      .then(function (enemy) {
        res.json(enemy);
      });
  });


  // POST route for saving a new enemy
  app.post("/api/route", function (req, res) {

        db.Route.create(req.body)
      .then(function (newRoute) {
        res.json(newRoute);
      })

  })

}