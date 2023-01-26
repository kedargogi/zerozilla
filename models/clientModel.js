const mongoose = require("mongoose");

const clientSchema = mongoose.Schema({
    agencyId: {
        type: mongoose.Schema.ObjectId,
        ref: "Agency",
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        required: true
    },
    totalBill: {
        type: Number,
        required: true
    },
    
},
    {
        timestamps: true,
    }
)

module.exports = mongoose.model("Client", clientSchema);