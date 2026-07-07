require('dotenv').config();
const connectDB = require("./src/config/db")
const app = require('./src/app')

connectDB();

app.listen(3000, () => {
    console.log("server is started at post 3000");
})