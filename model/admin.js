const mongoose = require("mongoose");
const adminSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    phoneNo: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        enum: ['Male', 'Female']
    },
    position: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    role: {
        type: String,
    },
    image: {
        type: String,
    }
},
    {
        timeseries: true
    })
module.exports = mongoose.model("admin", adminSchema)