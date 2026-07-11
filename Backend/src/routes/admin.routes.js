const { Router } = require('express')
const adminController = require('../controllers/admin.controller')
const adminAuthMiddleware = require('../middlewares/adminAuth.middleware')
const validate = require('../middlewares/validate.middleware')
const { adminLoginValidator, homepageUpdateValidator } = require('../validators/admin.validator')
const multer = require('multer')

const router = Router()
const allowedImageMimeTypes = new Set(['image/jpeg', 'image/png', 'image/svg+xml'])

const upload = multer({
	storage: multer.memoryStorage(),
	fileFilter: (req, file, cb) => {
		if (allowedImageMimeTypes.has(file.mimetype)) {
			return cb(null, true)
		}

		return cb(new Error('Only JPEG, PNG, and SVG images are allowed'))
	}
})

const handleUploadImage = (req, res, next) => {
	upload.single('image')(req, res, (err) => {
		if (err) {
			return res.status(400).json({ error: err.message })
		}

		next()
	})
}

const handleHomepageUpload = (req, res, next) => {
	upload.single('image')(req, res, (err) => {
		if (err) {
			return res.status(400).json({ error: err.message })
		}

		next()
	})
}


router.post('/login', adminLoginValidator, validate, adminController.adminLogin)

router.patch('/homepage', adminAuthMiddleware, handleHomepageUpload, homepageUpdateValidator, validate, adminController.updateHomepageData)

router.post('/upload-image', adminAuthMiddleware, handleUploadImage, adminController.uploadImage)

router.get('/get-me', adminAuthMiddleware, adminController.getAdmin);

router.post('/logout', adminAuthMiddleware, adminController.adminLogout)

module.exports = router