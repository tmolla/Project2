var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/users", function(req, res) {
    db.User.findAll({ include: [db.Log] }).then(function(dbuser) {
      res.json(dbuser);
    });
  });
  app.get("/api/log", function(req, res) {
    db.Log.findAll({}).then(function(dbuser) {
      res.json(dbuser);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });
};
