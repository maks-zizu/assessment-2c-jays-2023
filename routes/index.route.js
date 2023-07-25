const router = require('express').Router();
const authRouter = require('./view/auth.route');
const apiItemsRouter = require('./api/apiItems.route');
const itemsRouter = require('./view/items.route');
const apiAuthRouter = require('./api/apiAuth.route');
const Carts = require('./view/carts.route');
const apiCartsRouter = require('./api/apiCarts.route');

router.use('/api/items', apiItemsRouter);
router.use('/carts', Carts);
router.use('/auth', authRouter);
router.use('/api/auth', apiAuthRouter);
router.use('/api/carts', apiCartsRouter);
router.use('/', itemsRouter);

module.exports = router;
