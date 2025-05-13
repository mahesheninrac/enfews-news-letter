import { useState } from 'react';
import axios from 'axios';

const ProductSearch = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSearch = async () => {
        if (!query) return;
        setLoading(true);
        setError('');
        try {
            const response = await axios.get(`http://localhost:5000/search?query=${query}`);
            setResults(response.data);
        } catch (err) {
            setError('No products found for this search.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>Product Search</h1>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for products..."
            />
            <button onClick={handleSearch} disabled={loading}>
                Search
            </button>

            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}

            <div>
                {results.length > 0 ? (
                    results.map((result, index) => (
                        <div key={index}>
                            <h3>{result.platform}</h3>
                            <p>{result.product.title}</p>
                            <p>{result.product.price}</p>
                            <p>{result.product.description}</p>
                            <img src={result.product.image} alt={result.product.title} />
                            <a href={result.product.productLink} target="_blank" rel="noopener noreferrer">
                                <button>View Product</button>
                            </a>
                            <p>{result.product.reviews}</p>
                        </div>
                    ))
                ) : (
                    <p>No results found</p>
                )}
            </div>
        </div>
    );
};

export default ProductSearch;
