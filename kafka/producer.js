const { Kafka } = require('kafkajs');
const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['localhost:9092']
});
const producer = kafka.producer();
const sendMessage = async (topic, message) => { 
    await producer.connect();
    await producer.send({
        topic: topic,
        messages: [
            {
                value: message   
             }
        ]
    })
    console.log(`Message sent to topic ${topic}: ${message} `);
    await producer.disconnect();
};
module.exports = sendMessage;
