'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    static associate({ Item, User }) {
      this.belongsTo(Item, { foreignKey: 'itemId' });
      this.belongsTo(User, { foreignKey: 'userId' });
    }
  }
  Cart.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'Users', key: 'id' },
        onDelete: 'CASCADE',
      },
      itemId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'Items', key: 'id' },
        onDelete: 'CASCADE',
      },
    },
    {
      sequelize,
      modelName: 'Cart',
    },
  );
  return Cart;
};
