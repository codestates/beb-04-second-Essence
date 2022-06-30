'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Post, {
        as: "post",
        foreignKey: "writer",
        sourceKey: "userName"
      });

      User.hasMany(models.Comment, {
        as: "comment",
        foreignKey: "writer",
        sourceKey: "userName"
      });
    }
  }
  User.init({
    userName: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    privateKey: DataTypes.STRING,
    balance :DataTypes.FLOAT,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};