const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController/userController');

router.get('/', userController.get);

router.post('/', userController.post);

router.delete('/:id', userController.delete);

router.get('/:id', userController.getById);

router.put('/:id', userController.put);

module.exports = {
    router
}