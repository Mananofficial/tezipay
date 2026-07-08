const { Router } = require('express')
const adminController = require('../controllers/admin.controller')
const adminAuthMiddleware = require('../middlewares/adminAuth.middleware')
const validate = require('../middlewares/validate.middleware')
const { adminLoginValidator, homepageUpdateValidator } = require('../validators/admin.validator')
const multer = require('multer')

const router = Router()
const upload = multer({ storage: multer.memoryStorage() })


router.post('/login', adminLoginValidator, validate, adminController.adminLogin)

router.patch('/homepage', adminAuthMiddleware, upload.single('image'), homepageUpdateValidator, validate, adminController.updateHomepageData)

router.post('/upload-image', adminAuthMiddleware, upload.single('image'), adminController.uploadImage)

router.get('/get-me', adminAuthMiddleware, adminController.getAdmin);

router.post('/logout', adminAuthMiddleware, adminController.adminLogout)

module.exports = router