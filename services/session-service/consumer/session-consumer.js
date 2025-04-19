import { subscribeEvent } from "../../../shared/events/eventBus";

 

export const startSessionConsumer = async () => {
  await subscribeEvent('session.booked', async (data) => {
    console.log('[session-service] Consumed event:', data);
    // You can do internal stuff like logging, analytics, etc. here.
  });
};