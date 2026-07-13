const pageModel = require('../models/page.model')

async function getPageData(req, res) {
	const { pageKey } = req.params

	try {
		const pageData = await pageModel.findOne({ pageKey })

		if (!pageData) {
			return res.status(404).json({ error: 'Page not found' })
		}

		res.status(200).json({
			message: 'Page data fetched successfully',
			data: pageData
		})
	} catch (err) {
		console.log(err)
		res.status(500).json({ error: 'Failed to fetch page data' })
	}
}

async function updatePageData(req, res) {
	const { pageKey } = req.params
	const payload = req.body

	try {
		const updatedPageData = await pageModel.findOneAndUpdate(
			{ pageKey },
			{
				$set: {
					pageKey,
					...payload
				}
			},
			{
				new: true,
				upsert: true,
				runValidators: true
			}
		)

		res.status(200).json({
			message: 'Page data updated successfully',
			data: updatedPageData
		})
	} catch (err) {
		console.log(err)
		res.status(500).json({ error: 'Failed to update page data' })
	}
}

module.exports = { getPageData, updatePageData }