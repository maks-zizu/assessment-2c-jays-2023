const router = require('express').Router();
const { Cart } = require('../../db/models');

router.post('/', async (req, res) => {
  try {
    const { iteId } = req.body;
    const userIdsess = req.session.userId;
    if (iteId && userIdsess) {
      const favorites = await Cart.create({
        userId: userIdsess,
        itemId: iteId,
      });
      res.json({ message: 'ok' });
    }
  } catch (error) {
    res.json({ messageError: error.message });
  }
});

router.delete('/:idCart/delete', async (req, res) => {
  try {
    const { idCart } = req.params;
    const delCart = await Cart.destroy({ where: { id: idCart } });
    res.json({ delCart });
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = router;
