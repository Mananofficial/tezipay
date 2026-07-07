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

// async function createHomepageData(req, res) {
//     const { colors, navbar, heroSection, heroBelowSection, blueprint, note, footer } = req.body

//     const newHomepageData = await homepageModel.create({
//         colors,
//         navbar,
//         heroSection,
//         heroBelowSection,
//         blueprint,
//         note,
//         footer
//     })

//     res.status(201).json({
//         message: 'Homepage data created successfully',
//         data: newHomepageData
//     })
// }


module.exports = {
    getHomepageData, 
    // createHomepageData,
}