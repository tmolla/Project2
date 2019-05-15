module.exports = function(sequelize, DataTypes) {
  // Holds the type of Harvest users are allowed to share
  // example - Orange, Peach, Tomato, Squash ...

  var Harvest = sequelize.define("Harvest", {
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [1]
      }
    }
  });

  return Harvest;
};
