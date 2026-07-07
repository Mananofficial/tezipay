const imageKit = require('@imagekit/nodejs')

const client = new imageKit({
    publicKey: process.env.IMAGEKIT_PRIVATE_KEY
})

async function uploadImage (buffer) {
    try {
        const result = await client.files.upload({
            file: buffer.toString('base64'),
            fileName: `image_${Date.now()}.jpg`,
            folder: "/teripay"
        });
        return result;
    } catch (error) {
        console.error('Error uploading image:', error);
        throw error;
    }
}

module.exports = uploadImage;