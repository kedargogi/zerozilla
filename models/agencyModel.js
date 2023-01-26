const mongoose = require("mongoose");

const agencySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    address1: {
        type: String,
        required: true,
    },
    address2: {
        type: String,
    },
    state: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true
    }
},
    {
        timestamps: true,
    }
)


module.exports = mongoose.model("Agency", agencySchema);