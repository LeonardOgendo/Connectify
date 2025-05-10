import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

dotenv.config();

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Enable CORS (Allow frontend to access backend)
app.use(cors())

// API endpoint
app.get('/api/content', (req, res) => {
    res.json({
        content: {
            title: "Communicating with Backend",
            message: "Communication successful! Hello from Backend"
        }
    });
});


// Start server
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})