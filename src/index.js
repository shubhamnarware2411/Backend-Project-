
const express = require('express')
const app = express()

require('dotenv').config({ path: '/.env' })

const db = require('./db/db_connect')



db.connectDB()
    .then(() => {
        app.listen(process.env.PORT || 3000, () => {
            console.log("SERVER IS LISTEN AT ", process.env.PORT)
        })
        app.on("Error", (error) => {
            console.log("ERROR", error)
            throw error
        })

    })
    .catch((err) => {
        console.log("MONGODB CONNECTION FAILED ERROR ", err)
    })