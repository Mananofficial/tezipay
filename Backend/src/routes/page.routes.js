const { Router } = require('express')
const pageModel = require('../models/page.model')
const pageController = require('../controllers/page.controller')
const adminAuthMiddleware = require('../middlewares/adminAuth.middleware')

const router = Router()

router.get('/:pageKey', pageController.getPageData)
router.patch('/:pageKey', adminAuthMiddleware, pageController.updatePageData)

router.post('/temp', async (req, res) => {
	try {
		const { pageKey, ...payload } = req.body
		const pageData = await pageModel.create({ pageKey, ...payload })
		res.status(201).json({
			message: 'Temporary page created successfully',
			data: pageData
		})
	} catch (err) {
		console.log(err)
		res.status(500).json({ error: 'Failed to create temporary page' })
	}
})

module.exports = router