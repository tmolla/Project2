module.exports = function(sequalize, DataTypes) {
  //Keeps running total of products
  var Inventory = sequalize.define("Inventory", {
    quantity: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isNumeric: true,
        min: 0
      }
    }
  });

  return Inventory;
};
