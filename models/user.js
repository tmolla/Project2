module.exports = function(sequelize, DataTypes) {
  //Registered users

  var User = sequelize.define("User", {
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    Address: {
      type: DataTypes.STRING,
      allowNull: false
    },

    City: {
      type: DataTypes.STRING,
      allowNull: false
    },

    State: {
      type: DataTypes.STRING,
      allowNull: false
    },

    Zip: {
      type: DataTypes.STRING,
      allowNull: false
    },

    EMail: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },

    Phone: {
      type: DataTypes.STRING,
      allowNull: false
    },

    Password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  User.associate = function(models) {
    User.hasMany(models.Log, {
      foreignKey: {
        allowNull: true
      }
    });
  };
  return User;
};
