const express = require('express')
const router = express.Router()
const adminController = require('../controllers/adminController')
router.post('/login',adminController.login)
router.post('/create/admin',adminController.createAdmin)


module.exports = router