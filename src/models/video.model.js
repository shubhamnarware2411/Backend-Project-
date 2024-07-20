const mongoose = require('mongoose')

const aggregatePaginate = require("mongoose-aggregate-paginate-v2");


const videoSchema = new mongoose.Schema({

    videoFile: //cloundinary 
    {
        type: String,
        required: true
    },
    thumbnail://cloundinary 
    {
        type: String,
        required: true
    },
    titile:
    {
        type: String,
        required: true
    },
    description:
    {
        type: String,
        required: true
    },
    duration://cloundinary 
    {
        type: String,
        required: true
    },
    view:
    {
        type: Number,
        default: 0
    },

    isPublished:
    {
        type: Boolean,
        default: false
    },
    owner:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

}, { timestamps: true })

videoSchema.plugin(aggregatePaginate);

export const Video = mongoose.model("Video", videoSchema)