const express = require('express')
const homepageRoutes = require('./routes/homepage.routes')
const adminRoutes = require('./routes/admin.routes')
const pageRoutes = require('./routes/page.routes')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const helmet = require('helmet')
const path = require('path')

const app = express();
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: [
        "http://localhost:5173",
        "http://localhost:5174"
    ],
    credentials: true
}));
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            imgSrc: ["'self'", 'data:', 'blob:', 'http://localhost:3000']
        }
    },
	crossOriginResourcePolicy: {
		policy: 'cross-origin'
	}
}))
app.use('/src/assets/upload', express.static(path.join(__dirname, '../../Frontend/src/assets/upload')))

app.use('/api/homepage', homepageRoutes)
app.use('/api/pages', pageRoutes)
app.use('/api/admin', adminRoutes)

module.exports = app;