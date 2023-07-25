const router = require('express').Router();
const ItemList = require('../../components/ItemList');
const ItemCard = require('../../components/ItemCard');
const { Item } = require('../../db/models');
const UpdateForm = require('../../components/UpdateForm');

router.get('/', async (req, res) => {
  const items = await Item.findAll();
  res.renderComponent(ItemList, { title: 'Товары', items });
});

router.get('/updForm/:id', async (req, res) => {
  const item = await Item.findOne({ where: { id: req.params.id } });
  res.renderComponent(UpdateForm, { title: 'Изменения', item });
});

router.get('/:idItem', async (req, res) => {
  const { idItem } = req.params;
  const item = await Item.findOne({
    where: { id: idItem },
  });
  res.renderComponent(ItemCard, {
    title: item.name,
    item,
  });
});

module.exports = router;
