'use strict'

const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');
const basename  = path.basename(__filename); //returns the last portion/file-name part of a path.
const models = {};

const sequelize = new Sequelize('wave', 'amiinamo', '', {
  dialect: 'postgres',
})


fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    models[model.name] = model;
  });

  Object.keys(models).forEach(modelName => {
    if (models[modelName].associate) {
      models[modelName].associate(models);
    }
  });

  models.sequelize = sequelize;
  models.Sequelize = Sequelize;

  module.exports = models;

