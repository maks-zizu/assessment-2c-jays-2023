const router = require('express').Router();
const { Item } = require('../../db/models');
const ItemOne = require('../../components/Item');

router.post('/addItem', async (req, res) => {
  try {
    const {
      name, url, description, price, article,
    } = req.body;
    if (name && url && description && price) {
      const item = await Item.create({
        name, url, description, price, article, userId: req.session.userId,
      });
      res.json({ html: res.renderComponent(ItemOne, { item }, { htmlOnly: true }) });
    } else {
      res.json({ message: 'Заполните все поля' });
    }
  } catch (error) {
    res.json({ messageError: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const {
      name,
      price,
      description,
      url,
      article,
    } = req.body;
    const itemUpd = await Item.update({
      name,
      price,
      description,
      url,
      article,
    }, { where: { id: req.params.id } });
    res.json({ itemUpd });
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.delete('/:idItem/delete', async (req, res) => {
  try {
    const { idItem } = req.params;
    const delItem = await Item.destroy({ where: { id: idItem } });
    res.json({ delItem });
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = router;
