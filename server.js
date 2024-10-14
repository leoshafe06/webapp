// Import express
const express = require('express');
const app = express();

// Set the port number
const port = process.env.PORT || 3000;

// Serve static files from the "public" directory (for serving images, CSS, etc.)
app.use(express.static('public'));

// Example menu data
const menu = [
  { id: 1, name: 'Pizza Margherita', price: 8.99 },
  { id: 2, name: 'Spaghetti Carbonara', price: 10.99 },
  { id: 3, name: 'Tiramisu', price: 4.99 }
];

// Basic route to serve the homepage
app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Restaurant Menu App</h1><p>Check out our delicious menu!</p>');
});

// Route to get the menu data
app.get('/menu', (req, res) => {
  res.json(menu);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
