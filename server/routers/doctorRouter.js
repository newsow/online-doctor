const express = require('express')
const router = express.Router()
const doctorController = require('../controllers/doctorController')

router.post('/create',doctorController.create)
router.post('/login',doctorController.login)
router.post('/add/:userId',doctorController.addPatient)
router.get('/all',doctorController.getAll)
router.get('/:id',doctorController.getOne)


module.exports = router