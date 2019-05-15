module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    Name: DataTypes.STRING,
    Address: DataTypes.STRING,
    EMail: DataTypes.STRING,
    Phone: DataTypes.STRING
  });

  User.associate = function(models) {
    User.hasMany(models.Log, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return User;
};
