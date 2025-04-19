import amqp from 'amqplib';

let channel; // channel holds the instance

// function to connect to rabbit mq
export async function ConnectToRabbit(){
    const connect = await amqp.connect("amqp://rabbitmq")
    channel = await connect.createChannel();
    await channel.assertExchange("codementee","topic", {durable:false})
    return channel
}

/** function to publist the event */
export async function publishEvent(eventType, payload){
    if(!channel) await ConnectToRabbit();
    channel.publish("codementee",eventType,Buffer.from(JSON.stringify(payload)));
}

/** function for cons */
export async function subscribeEvent(bindingKey, callback) {
    if (!channel) await connectRabbitMQ();
    const q = await channel.assertQueue('', { exclusive: true });
    await channel.bindQueue(q.queue, 'codementee', bindingKey);
    channel.consume(q.queue, (msg) => {
      if (msg.content) {
        const data = JSON.parse(msg.content.toString());
        callback(data);
      }
    }, { noAck: true });
  }