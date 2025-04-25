// Example of a MongoDB model using Mongoose
const mongoose = require('mongoose');

const productPlatformSchema = new mongoose.Schema({
    platformName: String,
    productUrl: String, // URL to scrape for products
});

const ProductPlatform = mongoose.model('ProductPlatform', productPlatformSchema);

module.exports = ProductPlatform;

