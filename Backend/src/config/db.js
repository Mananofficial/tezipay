const mongoose = require('mongoose');
const dns = require('dns')

dns.setServers(['1.1.1.1', '8.8.8.8'])

async function connectDB () {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("connected to Database")
    } catch (err) {
        console.log("Error occured connecting DB", err)
    }
}

module.exports = connectDB