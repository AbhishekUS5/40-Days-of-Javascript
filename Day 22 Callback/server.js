// server.js
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Mock data
const stores = ['store-123'];
const pizzas = [
    { id: 1, type: 'veg', name: 'Margherita' },
    { id: 2, type: 'non-veg', name: 'Pepperoni' }
];
const beverages = [
    { id: 1, name: 'Coca Cola' },
    { id: 2, name: 'Sprite' }
];

// API endpoints
app.get('/api/pizzahub', (req, res) => {
    setTimeout(() => res.json(stores), 1000);
});

app.get('/api/pizzahub/pizzas/:storeId', (req, res) => {
    setTimeout(() => res.json(pizzas), 1000);
});

app.get('/api/pizzahub/beverages/:pizzaId', (req, res) => {
    setTimeout(() => res.json([beverages[0]]), 1000);
});

app.post('/api/order', (req, res) => {
    setTimeout(() => {
        res.json({ 
            message: 'Order placed successfully',
            createdAt: new Date().toISOString()
        });
    }, 1000);
});

app.listen(3000, () => {
    console.log('Mock API server running on http://localhost:3000');
});