const mongoose = require('mongoose');


const ownerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    product: {
        type: Array,
        default: []
    },
    picture: {
        type: String,
        default: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-978409_960_720.png'
    },
    password: {
        type: String,
        required: true
    },
    gstin: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('owner', ownerSchema);