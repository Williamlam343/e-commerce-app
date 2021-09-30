const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoriesData = await Category.findAll(
      { include: [{ model: Product }] }
    );
    res.status(200).json(categoriesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const cateogoriesData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
    });

    if (!cateogoriesData) {
      res.status(404).json({ message: 'No product found with this id!' });
      return;
    }

    res.status(200).json(cateogoriesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const cateogoriesData = await Category.create(req.body);
    res.status(200).json(cateogoriesData);
  } catch (err) {
    res.status(400).json(err);
  }
  // create a new category
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const cateogoriesData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!cateogoriesData) {
      res.status(404).json({ message: 'No product found with this id!' });
      return;
    }

    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

