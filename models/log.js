module.exports = function(sequelize, DataTypes) {
  //keeps track of user sharing and taking activities
  var Log = sequelize.define("Log", {
    sharing: {
      //true = sharing or false = take
      type: DataTypes.BOOLEAN,
      allowNull: false
    },

    quantity: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isNumeric: true,
        min: 0
      }
    }
  });

  Log.associate = function(models) {
    Log.hasOne(models.Harvest, {
      foreginKey: {
        alloNull: false
      }
    });
  };

  Log.associate = function(models) {
    Log.belongsTo(models.User, {
      foreginKey: {
        allowNull: false
      }
    });

    Log.belongsTo(models.Harvest, {
      foreginKey: {
        allowNull: false
      }
    });
  };

  return Log;
};
