var db = require("../models");

module.exports = function(app) {
  // Get all harvest type
  app.get("/api/harvest", function(req, res) {
    db.Harvest.findAll().then(function(dbharvest) {
      res.json(dbharvest);
    });
  });

  // Create a new harvest Entry
  app.post("/api/harvest", function(req, res) {
    db.Harvest.create(req.body).then(function(dbharvest) {
      res.json(dbharvest);
    });
  });

  // Get all users
  app.get("/api/users", function(req, res) {
    db.User.findAll({ include: [db.Log] }).then(function(dbuser) {
      res.json(dbuser);
    });
  });

  app.post("/api/users/login", function(req, res) {
    db.User.findOne({
      where: {
        Password: req.body.Password,
        EMail: req.body.EMail
      }
    }).then(function(dbuser) {
      res.json(dbuser);
    });
  });

  // Get all specific user
  app.get("/api/users/:id", function(req, res) {
    db.User.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Log]
    }).then(function(dbuser) {
      res.json(dbuser);
    });
  });

  // Create a new user
  app.post("/api/users", function(req, res) {
    db.User.create(req.body).then(function(dbuser) {
      res.json(dbuser);
    });
  });

  // Create a new log Entry
  app.post("/api/logs", function(req, res) {
    db.Log.create(req.body).then(function(dblog) {
      res.json(dblog);
    });
  });

  //update user information
  app.put("/api/users/:id", function(req, res) {
    console.log("/api/users/:id");
    console.log(req.body);
    db.User.update(req.body, {
      where: {
        id: req.params.id
      }
    }).then(function(dbuser) {
      res.json(dbuser);
    });
  });

  app.put("userinfo/api/users/:id", function(req, res) {
    console.log("userinfo/api/users/:id");
    console.log(res.body);
    db.User.update(req.body, {
      where: {
        id: req.params.id
      }
    }).then(function(dbuser) {
      res.json(dbuser);
    });
  });

  //Find all share and take activities by all users
  app.get("/api/log", function(req, res) {
    db.Log.findAll({}).then(function(dblogs) {
      res.json(dblogs);
    });
  });

  //Find specific activity
  app.get("/api/log/:id", function(req, res) {
    db.Log.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dblogs) {
      res.json(dblogs);
    });
  });

  //find all activities by a specific user
  app.get("/api/log/user/:uid", function(req, res) {
    db.Log.findAll({
      where: {
        userid: req.params.uid
      }
    }).then(function(dbuser) {
      res.json(dbuser);
    });
  });

  // Create a new log Entry
  app.post("/userinfo/api/logs", function(req, res) {
    console.log(" in htmlRoute path /userinfo/api/logs");
    db.Log.create(req.body).then(function(dblog) {
      res.json(dblog);
    });
  });

  app.get("/userinfo/api/user/:id", function(req, res) {
    db.User.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbuser) {
      res.json(dbuser);
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
