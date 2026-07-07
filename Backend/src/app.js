const express = require('express')
const homepageRoutes = require('./routes/homepage.routes')
const adminRoutes = require('./routes/admin.routes')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const helmet = require('helmet')

const app = express();
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(helmet())

app.use('/api/homepage', homepageRoutes)
app.use('/api/admin', adminRoutes)

module.exports = app;