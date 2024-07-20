const mongoose = require('mongoose')

const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema(
    {
        username:
        {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true //Seraching mongo
        },
        email:
        {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,

        },
        fullname:
        {
            type: String,
            required: true,
            trim: true,
            index: true
        }
        ,
        avator:
        {
            type: String,// use cloundinary url
            required: true
        },
        coverImage:
        {
            type: String
        },
        watchHistory:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Video"
        },
        password:
        {
            type: String,
            required: [true, "PASSWORD IS REQUIRED "]
        }
        ,
        refreshToken:
        {
            type: String,
            required: true
        }

    }, { timestamps: true }
)

// HASH THE PASSWORD PRE 
userSchema.Schema.pre('save', async function (next) {
    if (this.isModified("password")) {
        this.password = bcrypt.hash(this.password, 10)
        next()
    }
})

// VALIDATE THE PASSWORD
userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}

// GENARATE THE JWT TOKEN
userSchema.methods.genrateAccessToken = function () {
    return jwt.sign({
        // payload
        _id: this._id,
        email: this.email,
        username: this.username,
        fullname: this.fullname
    },
        process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    }
    )
}

// REFERESH TOKEN 
userSchema.methods.genrateRefreshToken = function () {
    return jwt.sign(
        {
            // payload
            _id: this._id
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )

}

export const User = mongoose.model("User", userSchema)