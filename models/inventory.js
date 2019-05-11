module.exports = function(sequalize, DataTypes) {
  var Inventory = sequalize.define("Inventory", {
    quantity: DataTypes.DECIMAL // in pounds
  });

  return Inventory;
};
