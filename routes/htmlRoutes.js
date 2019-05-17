var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.User.findAll({}).then(function(dbuser) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbuser
      });
    });
  });

  app.get("/userinfo/:id", function(req, res) {
    db.User.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Log]
    }).then(function(dbuser) {
      db.Harvest.findAll({}).then(function(dbharvest) {
        res.render("userinfo", {
          msg: "Welcome!",
          user: dbuser,
          logs: dbuser.Logs,
          harvest: dbharvest
        });
      });
    });
  });

  // Create a new log Entry
  app.post("/userinfo/api/logs", function(req, res) {
    db.Log.create(req.body).then(function(dblog) {
      res.json(dblog);
    });
  });
  // app.get("/userinfo/:id", function(req, res) {
  //   db.User.findOne({
  //     where: {
  //       id: req.params.id
  //     },
  //     include: [db.Log]
  //   }).then(function(dbuser) {
  //     console.log(dbuser);
  //     console.log(dbuser.Logs);
  //     res.render("userinfo", {
  //       user: dbuser,
  //       logs: dbuser.Logs
  //     });
  //   });
  // });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
