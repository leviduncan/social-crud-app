const express = require("express")
const app = express()
const port = 8000
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const helmet = require('helmet')
const morgan = require('morgan')
const userRoute = require('./routes/users')
const authRoute = require('./routes/auth')

dotenv.config()
const url = process.env.MONGO_URL 

// Middleware
app.use(express.json())
app.use(helmet())
app.use(morgan('common'))
app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)

mongoose.set('strictQuery', true) // supress error until version 7

mongoose.connect(url, {useNewUrlParser:true, useUnifiedTopology: true}, ()=>{
    console.log('Connected to MongoDB')
})

app.get('/', (req, res) => {
    res.send('This is the homepage')
})

app.listen(port, () => {
    console.log(`Express Server is running on port: ${port}`)
})
