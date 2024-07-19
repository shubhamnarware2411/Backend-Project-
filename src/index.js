
const express = require('express')
const app = express()

require('dotenv').config({ path: '/.env' })

const db = require('./db/db_connect')


app.listen(process.env.PORT, () => {
    console.log("SERVER IS LISTEN AT ", process.env.PORT)
})

db.connectDB()