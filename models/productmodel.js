const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        default: 0
    },
    bgcolor: {
        type: String,
        default: 'white'
    },
    image: {
        type: String,
        default: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-978409_960_720.png'
    },
    panelcolor: {
        type: String,
        default: 'white'
    },
    textcolor: {
        type: String,
        default: 'black'
    },
});

module.exports = mongoose.model('product', productSchema);