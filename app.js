const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const consumeMessage = require('./kafka/consumer');
const sendMessage = require('./kafka/producer');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/send', async (req, res) => { 
    const { topic, message } = req.body;
    sendMessage(topic, message);
    res.send('Message sent to Kafka');
});
consumeMessage();
app.listen(8080, () => {
    console.log('Server is running on port 5000');
 });
