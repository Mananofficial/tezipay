const { Router } = require('express')
const homepageController = require('../controllers/homepage.controller')

const router = Router()

router.get('/', homepageController.getHomepageData)

module.exports = router