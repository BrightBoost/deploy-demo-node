const express = require('express');
const axios = require('axios');
const app = express();

const port = process.env.PORT;

// Serve static files (like HTML, CSS, and JS) from the 'public' folder
app.use(express.static('public'));

// Define an API endpoint
app.get('/api/data', async (req, res) => {
    try {
        // Call an external API (e.g., a placeholder API)
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching data');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
