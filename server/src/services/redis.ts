import { createClient } from "redis";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const client = createClient({
  username: process.env.REDIS_USERNAME,
  password: process.env.REDIS_PASSWORD,
  socket: {
    host: process.env.REDIS_ENDPOINT,
    port: 12237,
  },
});

client.on("error", (error) => {
  console.error("cannot connect to redis", error);
});

export function connect() {
  return client.connect();
}

export default client;
