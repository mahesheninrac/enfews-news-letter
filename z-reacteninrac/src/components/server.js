const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const ecommerceIndia = [
    "https://www.amazon.in/",
    "https://www.flipkart.com/",
    "https://www.meesho.com/",
    "https://www.myntra.com/",
    "https://www.ajio.com/",
    "https://www.snapdeal.com/",
    "https://www.nykaa.com/",
    "https://www.bigbasket.com/",
    "https://www.jiomart.com/",
    "https://www.tatacliq.com/",
    "https://www.reliancedigital.in/",
    "https://www.shopclues.com/",
    "https://www.firstcry.com/",
    "https://www.urbanic.com/",
    "https://www.limeroad.com/",
    "https://www.purplle.com/",
    "https://www.1mg.com/",
    "https://www.pharmeasy.in/",
    "https://www.netmeds.com/",
    "https://www.boat-lifestyle.com/",
    "https://www.mamaearth.in/",
    "https://www.beardo.in/",
    "https://www.zivame.com/",
    "https://www.healthkart.com/",
    "https://www.bookmyshow.com/",
    "https://www.swiggy.com/",
    "https://www.zomato.com/",
    "https://www.blinkit.com/",
    "https://www.zepto.com/"
];

const app = express();
app.use(express.json());

// Function to scrape product data from a specific URL (customize based on platform structure)
const scrapeProduct = async (url, query) => {
    try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);

        // Example: Scraping logic for Amazon (adjust based on actual HTML structure)
        const product = {
            title: $('span.a-text-normal').text().trim() || 'No title found',
            price: $('span.a-price-whole').text().trim() || 'Price not found',
            description: $('div#productDescription').text().trim() || 'Description not found',
            image: $('img#landingImage').attr('src') || 'No image found',
            reviews: $('span.a-declarative span.a-size-base').text().trim() || 'No reviews',
            platformName: url,
            productLink: url
        };

        return product;
    } catch (error) {
        console.error(error);
        return null;
    }
};

// Endpoint for searching products across multiple platforms
app.get('/search', async (req, res) => {
    const { query } = req.query;

    if (!query) {
        return res.status(400).json({ message: 'Search query is required' });
    }

    try {
        // Array to hold the results
        const results = [];

        // Loop through each platform in the ecommerceIndia array
        for (let platformUrl of ecommerceIndia) {
            const product = await scrapeProduct(platformUrl, query);
            if (product) {
                results.push({
                    platform: platformUrl,
                    product,
                });
            }
        }

        // Send the scraped results
        if (results.length > 0) {
            res.json(results);
        } else {
            res.status(404).json({ message: 'No products found for your search' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch product data' });
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
