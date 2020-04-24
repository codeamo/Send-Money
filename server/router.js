'use strict'

const Router = require('koa-router');
const router = new Router();
const ctr = require('./controllers/index');


router
  .post('./login', ctr.signIn)
  .post('/register', ctr.createUser)
  .post('/register/:userId/card', ctr.createCard)
  .post('/send/:senderId/:recipientId', ctr.createTx)
  .get('/txHistory/:id', ctr.getTxHistory)
  .get('/users', ctr.getUsers)
  .get ('/cardInfo/:id', ctr.getCardInfo);



module.exports = router;