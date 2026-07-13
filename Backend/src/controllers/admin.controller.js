const homepageModel = require('../models/homepage.model')
const adminModel = require('../models/admin.model')
const uploadImageService = require('../services/storage.service')
const jwt = require('jsonwebtoken')

async function updateHomepageData(req, res) {
    const { colors, navbar, heroSection, heroBelowSection, blueprint, note, footer } = req.body

    try {
        const updatedHomepageData = await homepageModel.findOneAndUpdate(
            {},
            { $set: { colors, navbar, heroSection, heroBelowSection, blueprint, note, footer } },
            { returnDocument: 'after' }
        )
        res.status(200).json({
            message: 'Homepage data updated successfully',
            data: updatedHomepageData
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Failed to update homepage data' })
    }
}


async function adminLogin(req, res) {
    const { email, password } = req.body

    try {
        const admin = await adminModel.findOne({
            email: email
        }).select('+password')

        if (!admin) {
            return res.status(404).json({ error: 'Admin not found' })
        }

        const isMatch = await admin.comparePassword(password)

        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid credentials' })
        }

        const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '1h' })

        res.cookie("token", token, {
            httpOnly: true,
            sameSite: "lax",
            secure: false,
            maxAge: 1000 * 60 * 60
        })

        res.status(200).json({
            message: 'Admin logged in successfully',
            admin: {
                email: admin.email,
                id: admin._id
            }
        })
    } catch (err) {
        console.log(err)
        return res.status(500).json({ error: 'Failed to login' })
    }
}

async function getAdmin(req, res) {
    try {
        const admin = await adminModel.findById(req.admin.id)
        res.status(200).json({ admin })
    } catch (err) {
        console.log(err)
        return res.status(500).json({ error: 'Failed to fetch admin data' })
    }
}

async function uploadImage(req, res) {
    const file = req.file

    if (!file) {
        return res.status(400).json({ error: 'No file uploaded' })
    }

    try {
        const result = await uploadImageService(file.buffer, file.mimetype)
        const baseUrl = `${req.protocol}://${req.get('host')}`

        res.status(200).json({
            message: 'Image uploaded successfully',
            url: `${baseUrl}${result.relativePath}`,
            path: result.relativePath
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Failed to upload image' })
    }
}

async function adminLogout(req, res) {
    res.clearCookie('token', {
        httpOnly: true,
        sameSite: "lax",
        secure: false
    })

    res.status(200).json({ message: 'Admin logged out successfully' })
}

module.exports = { updateHomepageData, adminLogin, getAdmin, uploadImage, adminLogout }