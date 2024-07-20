// import { v2 as cloudinary } from 'cloudinary';
const { v2: cloudinary } = require('cloudinary');
const { response } = require('express');
const fs = require('fs')




// Configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});



// Upload an Cloundinary

const uploadOnCloundinary = async (localFilePath) => {
    try {
        if (!localFilePath) {
            cloudinary.uploader.upload(localFilePath,
                {
                    resource_type: 'auto'
                }
            )
        }
        console.log("file is upload successfully ", response.url)

    } catch (error) {

        fs.unlinkSync(localFilePath)
        // remove the  locallay saved temporary file as the upload   operation  got failed
    }
}



