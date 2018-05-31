module.exports = mongoose.model('Product', new mongoose.Schema({

    name: {type: String, required: true},
    brand: {type: String, required: true},
    description: String,
    color: String,
    price: {type: Number, required: true},
    vat: Number,
    artnr: {type: String, unique: true}

}));