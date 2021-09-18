
const express = require('express');
const users = require('../controllers/user.controller');
const secure = require('../middlewares/secure.mid');
const item = require('../middlewares/item.mid');
const items = require('../controllers/items.controller');

const order = require('../middlewares/order.mid');
const orders = require('../controllers/order.controller');
const router = express.Router();

router.get('/items', items.list);

router.post('/items', items.create);
router.get('/items/:id', item.exists, items.detail);
router.delete('/items/:id', item.exists, items.delete);
router.put('/items/:id', item.exists, items.edit);


// router.post('/users', users.login);
router.post('/users', users.login);
router.get('/users', secure.isAdmin, secure.isAuthenticated, users.list); 
router.post('/register',secure.isNotAuthenticated, users.create);
router.post('/logout',secure.isAuthenticated, users.logout);
router.get('/authenticate/google', users.loginWithGoogle);
router.get('/authenticate/google/cb', users.doLoginWithGoogle);

router.get('/profile', secure.isAuthenticated, users.detail); //user sólo puede ver su perfil
router.put('/profile', secure.isAuthenticated, users.update); //user actualiza  perfil 

router.post('/orders', secure.isAuthenticated, orders.create);
router.get('/orders', secure.isAuthenticated, orders.listMyOrders) //user ve sus orders
router.get('/orders/:id', secure.isAuthenticated, order.exists, orders.detail)
router.put('/orders/:id', secure.isAuthenticated, order.exists, orders.edit)
router.get('/allorders', secure.isAuthenticated, secure.isAdmin, orders.list) //list all orders all users



router.use((req, res, next) => next(createError(404, 'Route not found')))

module.exports = router;