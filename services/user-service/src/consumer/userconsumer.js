import { subscribeEvent } from "../events/eventBus.js";

export const startUserSessionConsumer= async()=>{
    await subscribeEvent("session.booked",async (data) => {
        console.log('[session-service] Consumed event:', data);
        // You can do internal stuff like logging, analytics, etc. here.
      })
    }