const amqp = require('amqplib/callback_api');

const receberData = () => {
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

            channel.assertExchange(exchange, 'topic', {
                durable: false
            });

            channel.assertQueue('', {
                exclusive: true
            }, function (error2, q) {
                if (error2) {
                    throw error2;
                }
                console.log(' [*] Esperando por datas de churrasco. Para sair aperte CTRL+C');

                channel.bindQueue(q.queue, exchange, key);

                channel.consume(q.queue, function (msg) {
                    console.log(" [x] %s:'%s'", msg.fields.routingKey, msg.content.toString());
                }, {
                    noAck: true
                });
            });
        });
    })
}

receberData()
