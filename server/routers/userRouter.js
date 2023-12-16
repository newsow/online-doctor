const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const fileUploader = require('../middlewares/fileUploader')
const imageUploader =require('../middlewares/imageUploader')
router.post('/signup',imageUploader.single('file'),userController.signUp)
router.post('/login',userController.login)
router.post('/profile',userController.getOneByToken)
router.post('/add/document/:id',fileUploader.single('file'),userController.addDocument)
router.get('/all',userController.getAll)
router.get('/:id',userController.getOne)


module.exports = router