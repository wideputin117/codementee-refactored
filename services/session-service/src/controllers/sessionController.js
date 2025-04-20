import { publishEvent } from '../../events/eventBus.js';
import Session from '../models/Session.js';
import amqp from 'amqplib';

// async function publishEvent(eventType, payload) {
//   const conn = await amqp.connect('amqp://rabbitmq');
//   const ch = await conn.createChannel();
//   await ch.assertExchange('codementee', 'topic', { durable: false });
//   ch.publish('codementee', eventType, Buffer.from(JSON.stringify(payload)));
//   setTimeout(() => conn.close(), 500);
// }

export const bookSession = async (req, res) => {
  const session = await Session.create(req.body);
  const data= await publishEvent('session.booked', session);
  res.status(201).json({session:session, data:data});
};
