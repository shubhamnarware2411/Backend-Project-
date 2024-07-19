require('dotenv').config()
const DB_NAME = require('../constacts')
const mongoose = require('mongoose')

exports.connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MONGODB Connected !!DB Host : ${connectionInstance.connection.host}`)
    }
    catch (error) {
        console.log(" MONGODB CONNECTION ERROR", error)
        process.exit(1)
    }
}

