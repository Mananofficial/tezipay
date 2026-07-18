const homepageModel = require('../models/homepage.model')

async function getHomepageData(req, res) {
    try {
        const homepageData = await homepageModel.findOne()
        res.status(200).json({
            message: 'Homepage data fetched successfully',
            data: homepageData
        })
    } catch (err) {
        res.status(500).json({
            message: 'Error fetching homepage data',
            error: err
        })
    }
}


module.exports = {
    getHomepageData
}