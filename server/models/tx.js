'use strict'

module.exports = (sequelize, DataTypes) => {
  const Tx = sequelize.define('Tx', {
    TransactionType: {
      type: DataTypes.STRING,
      defaultValue: "Transfer",
    },
    TransactionAmount: {
      type: DataTypes.INTEGER,
      require: true,
    },
    senderId: {
      type: DataTypes.STRING,
      require: true,
    },
    recipientId: {
      type: DataTypes.STRING,
      require: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
        as: 'userId',
      },
    }

  });

  Tx.associate = (models) => {
    Tx.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
  }

  return Tx;
};