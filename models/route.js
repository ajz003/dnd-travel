module.exports = function (sequelize, DataTypes) {
  var Route = sequelize.define("Route", {
    name: {
      type: DataTypes.STRING
    },
    days: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    danger: {
      type: DataTypes.INTEGER
    },
    navigation: {
      type: DataTypes.INTEGER
    },
    resources: {
      type: DataTypes.INTEGER
    }
  });
  return Route;
};