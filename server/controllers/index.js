'use strict'

const models = require('../models/index');
const Sequelize = require('sequelize');

//create User
exports.createUser = async ctx => {
  try {
    const {firstName, lastName, email, password} = ctx.request.body;
    const user = await models.User.create({firstName, lastName, email, password});
    ctx.body = {
      status: 'success',
      message: 'card successfully added',
      data: user
    };
    ctx.status = 201;
  } catch (error) {
    ctx.body = {
      status: 'unsuccessful',
      message: 'card NOT added',
      data: error
    };
    ctx.status = 500;
  }
};

//Create credit card
exports.createCard = async ctx => {
  try {
    const {cardNumber, cardName, month, year, cvv} = ctx.request.body;
    const userId = ctx.params.userId;  
    const card = await models.Card.create({cardNumber, cardName, month, year, cvv, userId});
    ctx.body = {
      status: 'success',
      message: 'card successfully added',
      data: card
    };
    ctx.status = 201;
  } catch (error) {
    ctx.status = 500;
    ctx.body = error;
  }
};

//create transaction 
exports.createTx = async ctx => {
  console.log(ctx.request.body);
  try {
    const userId = ctx.params.senderId;  
    const senderId = ctx.params.senderId;
    const recipientId = ctx.params.recipientId;
    const { TransactionAmount } = ctx.request.body;

    const senderBalance = await models.User.findOne({
      where: {
        id: parseInt(senderId)
      }
    }).then(balance => {return balance.balance});

    if (senderBalance > TransactionAmount) {
      const transaction = await models.Tx.create({ TransactionAmount, senderId, recipientId, userId })
      .then(() => {
        models.User.findOne({
          where: {
            id: parseInt(senderId)
          }
      }).then(balance => {balance.update({ balance: Sequelize.literal(`balance - ${TransactionAmount}`) }, { where: { id: senderId }})});})
      .then(() => {
        models.User.findOne({
          where: {
            id: parseInt(recipientId)
          }
      }).then(balance => {balance.update({ balance: Sequelize.literal(`balance + ${TransactionAmount}`) }, { where: { id: recipientId }})});})
      ctx.body = transaction;
      ctx.status = 201;
      ctx.message = 'Transfer done';
    }
  } catch (error) {
    ctx.body = {
      status: 'unsuccessful',
      message: 'unable to post to the database',
      data: error
    }
    ctx.status = 500;
  }
}
//list of all current users
exports.getUsers = async ctx => {

  try {
    ctx.body = await models.User.findAll()
  } catch (error) {
    ctx.body = {
      status: 'unsuccessful',
      message: 'unable to return from database',
      data: error
    }
  }
}

//Transaction history
exports.getTxHistory = async ctx => {
  try {
    const userId = ctx.params.id;
    const transaction = await models.Tx.findAll({
      where: {
        userId: parseInt(userId)
      }
    });
    ctx.body = transaction;
  } catch (error) {
    ctx.body = {
      status: unsuccessful,
      message: 'unable to retrieve the transaction history',
      data: error
    }
  }
}

//credit card information
exports.getCardInfo = async ctx => {
  try {
    const userId = ctx.params.id;
    const card = await models.Card.findAll({
      where: {
        userId: parseInt(userId)
      }
    });
    ctx.body = card;
  } catch (error) {
    ctx.body = {
      status: unsuccessful,
      message: 'unable to retrieve the transaction history',
      data: error
    }
  }
}

