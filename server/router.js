'use strict'

const Router = require('koa-router');
const router = new Router();
const ctr = require('./controllers/index');

router.post('/register', ctr.createUser);
router.post('/register/:userId/card', ctr.createCard);
// router.post('/register', ctr.createCard);
router.post('/send/:senderId/:recipientId', ctr.createTx); //finish it's client section
router.get('/txHistory/:id', ctr.getTxHistory);
router.get('/users', ctr.getUsers);
router.get ('/cardInfo/:id', ctr.getCardInfo);



module.exports = router;