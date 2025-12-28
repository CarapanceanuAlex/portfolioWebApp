require('dotenv').config();

const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;

app.post('/verify-recaptcha', async (req, res) => {
    const { token } = req.body;
    
    if (!token) {
        return res.status(400).json({ 
            success: false, 
            message: 'TOKEN IS FUKING MISSING!!!!!!!!!' 
        });
    }

    try {
        const response = await axios.post(
            'https://www.google.com/recaptcha/api/siteverify',
            null,
            {
                params: {
                    secret: SECRET_KEY,
                    response: token
                }
            }
        );

        const data = response.data;
        res.json(data);
    } catch (error) {
        return res.status(500).json({ 
            success: false, 
            message: 'SERVER ERROR MY BRUDDA!!!!!!' 
        });
    }
});

app.listen(3001, () => {
    console.log("Backend running, straight up SPRINTING, on http://localhost:3001");
});