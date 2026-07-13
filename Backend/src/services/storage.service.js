const fs = require('fs/promises')
const path = require('path')

const uploadDir = path.join(__dirname, '../../../Frontend/src/assets/upload')
const publicUploadPath = '/src/assets/upload'

const mimeToExtension = {
	'image/jpeg': '.jpg',
	'image/png': '.png',
	'image/svg+xml': '.svg'
}

async function uploadImage(buffer, mimetype) {
	const extension = mimeToExtension[mimetype] || '.jpg'
	const fileName = `image_${Date.now()}_${Math.round(Math.random() * 1e9)}${extension}`
	const filePath = path.join(uploadDir, fileName)

	await fs.mkdir(uploadDir, { recursive: true })
	await fs.writeFile(filePath, buffer)

	return {
		fileName,
		relativePath: `${publicUploadPath}/${fileName}`
	}
}

module.exports = uploadImage;