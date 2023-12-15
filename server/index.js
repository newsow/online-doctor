const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const mongoose = require('mongoose')
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials:true
}
const PORT = 5000
const dbUrl = process.env.DBURL || 'mongodb://127.0.0.1:27017/sights'
app.use(express.json())
app.use(cors(corsOptions))
app.use(express.static('images'))


const start = async() =>{
    try {
        await mongoose.connect(dbUrl)
        app.listen(PORT,()=>{
            console.log(`server started on port ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()