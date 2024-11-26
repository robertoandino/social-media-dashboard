const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const HUGGING_FACE_API_URL = 'https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill';
const HUGGING_FACE_API_KEY = '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'

app.post('/api/bot', async (req, res) => {
    
    const { message } = req.body;

    try {
        const response = await axios.post(
            HUGGING_FACE_API_URL,
            { inputs: message },
            { headers: {Authorization: `Bearer ${HUGGING_FACE_API_KEY}` }}
        );
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error communicating with AI');
    }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 