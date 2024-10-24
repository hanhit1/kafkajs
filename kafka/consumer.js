const { Kafka } = require('kafkajs');
const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['localhost:9092']
});
const consumer = kafka.consumer({ groupId: 'test-group' });
const consumeMessage = async () => { 
    await consumer.connect();
    await consumer.subscribe({ topic: 'test-topic', fromBeginning: true });
    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            console.log(`Message received from topic ${topic}: ${message.value.toString()} with partition ${partition}`);
        }
    });
}
module.exports = consumeMessage;