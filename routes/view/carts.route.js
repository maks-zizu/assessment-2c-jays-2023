const router = require('express').Router();
const Carts = require('../../components/Carts');
const ItemCard = require('../../components/ItemCard');
const { Item, Cart } = require('../../db/models');

router.get('/', async (req, res) => {
  const carts = await Cart.findAll({
    where: { userId: req.session.userId },
    include: { model: Item },
  });

  res.renderComponent(Carts, { title: 'Favorites', carts });
});

router.get('/:idItem', async (req, res) => {
  const { idItem } = req.params;
  const product = await Item.findOne({ where: { id: idItem } });
  res.renderComponent(ItemCard, { product });
});

module.exports = router;
