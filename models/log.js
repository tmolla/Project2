module.exports = function(sequelize, DataTypes) {
  var Log = sequelize.define("Log", {
    sharing: DataTypes.BOOLEAN, //true = sharing or false = take
    timestamp: DataTypes.DATE
  });

  return Log;
};
