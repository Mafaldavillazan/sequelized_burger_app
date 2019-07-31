module.exports = function(sequelize, Datatype){
  var Burger = sequelize.define("Burger", {
    id: {
      type: Datatype.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    burger_name: Datatype.STRING,
    devoured: {
      type: Datatype.BOOLEAN,
      defaultValue: 0
    } 
  });
  return Burger
};