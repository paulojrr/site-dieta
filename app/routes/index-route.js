const express = require('express')
const router = express.Router()
const indexController = require('../controllers/index-controller')
const UserController = require('../controllers/User-controller')


router.get('/', indexController.get)
router.post('/register', UserController.register)

module.exports = router