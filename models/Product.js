'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Cities, {
        foreignKey: {
          name: 'idCity',
        },
      });

      this.belongsTo(models.User,{
        foreignKey: {
          name: 'idUser',
        },
      })
      
    }
  };
  Product.init({
    idUser: DataTypes.INTEGER,
    idCity: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};