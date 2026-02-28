// This is the complete content of the file with proper formatting.

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
    const event = req.body;
    // Process the event
    console.log('Received event:', event);
    res.status(200).send('Event received');
});

const WEBHOOK_URL = 'https://jhujhghg.app.n8n.cloud/webhook-test/suraj';

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
