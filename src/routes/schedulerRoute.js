const express = require('express');

const router = express.Router();

const controller = require('../controllers/schedulerController')

router.post('/scheduler', controller.create);
router.get('/schedulers', controller.findAll);
router.patch('/scheduler/:id', controller.update);
router.delete('/scheduler/:id',  controller.erase);

module.exports = router;