const { Router } = require('express')
const adminController = require('../controllers/admin.controller')
const adminAuthMiddleware = require('../middlewares/adminAuth.middleware')
const multer = require('multer')

const router = Router()
const upload = multer({ storage: multer.memoryStorage() })


router.post('/login', adminController.adminLogin)

router.patch('/homepage', adminAuthMiddleware, upload.single('image'), adminController.updateHomepageData)

router.post('/upload-image', adminAuthMiddleware, upload.single('image'), adminController.uploadImage)

router.get('/get-me', adminAuthMiddleware, adminController.getAdmin);

router.post('/logout', adminAuthMiddleware, adminController.adminLogout)

module.exports = router