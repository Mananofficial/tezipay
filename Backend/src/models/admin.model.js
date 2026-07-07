const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const adminSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false
    }
})

adminSchema.pre('save', async function () {
    if(this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10)
    }
})

adminSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}

const adminModel = mongoose.model('Admin', adminSchema)

module.exports = adminModel