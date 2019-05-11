module.exports = function(sequelize, DataTypes) {
  // Holds the type of Harvest users are allowed to share
  // example - Orange, Peach, Tomato, Squash ...

  var Harvest = sequelize.define("Harvest", {
    identifier: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  Harvest.associate = function(models) {
    Harvest.hasMany(models.Inventory, {
      foreignKey: {
        allowNull: false
      }
    });

    Harvest.hasMany(models.Log, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Harvest;
};
