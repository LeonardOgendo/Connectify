import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();

// Simple routes
app.get('/', (req, res) => {
    res.send('Getting Started');
});

app.get('/about', (req, res) => {
    res.send('Learn more about us');
});

// Start server
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})