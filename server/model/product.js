const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: String,
    description: String,
    inStock: Number,
    cartQty: Number
});
        
module.exports = mongoose.model('Product', productSchema)