const amqp = require('amqplib/callback_api');

const enviarData = (data) => {
    amqp.connect('amqp://localhost', function (error0, connection) {
        if (error0) {
            throw error0;
        }
        connection.createChannel(function (error1, channel) {
            if (error1) {
                throw error1;
            }
            const exchange = 'data-churrasco';
            const key = 'churrasco.data'
            const msg = data 

            channel.assertExchange(exchange, 'topic', {
                durable: false
            });

            channel.publish(exchange, key, Buffer.from(msg));
            console.log(" [x] Sent %s:'%s'",key, msg);
        });
    });
}

module.exports = {enviarData}