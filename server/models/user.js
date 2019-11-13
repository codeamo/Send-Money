'use strict'

module.exports = (sequelize, DataTypes ) => {
  const User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      unique: true,
    },
    lastName: {
      type: DataTypes.STRING,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    //password should accept both number and string
    password: {
      type: DataTypes.INTEGER,
      unique: true,
    },
    imgUrl: {
      type: DataTypes.STRING,
      unique: true,
    },
    balance: {
      type: DataTypes.INTEGER,
      defaultValue: 25,
      allowNull: false,
    },
    currency: {
      type: DataTypes.STRING,
      defaultValue: '$',
      allowNull: false,
    }
  });

  User.associate = (models) => {
    User.hasMany(models.Card, {
      foreignKey: 'userId',
      as: 'Card',
    });
  }

  User.associate = (models) => {
    User.hasMany(models.Tx, {
      foreignKey: 'userId',
      as: 'Tx',
    });
  }

  return User;
}