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
    },

    harvest: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },

    comment: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });

  Log.associate = function(models) {
    Log.belongsTo(models.User, {
      foreginKey: {
        allowNull: false
      }
    });
  };

  return Log;
};
