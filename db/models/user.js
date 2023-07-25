'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Item, Cart }) {
      this.hasMany(Item, { foreignKey: 'userId' });
      this.hasMany(Cart, { foreignKey: 'userId' });
    }
  }
  User.init(
    {
      login: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: 'User',
    },
  );
  return User;
};
