import express from "express";
import http from "http";
import dotenv from "dotenv";
import configureRoutes from "./routers";
import cors from "cors";
import { connect } from "./services/redis";

dotenv.config();

const app = express();
const port = 4000;

// Enable CORS for all routes
app.use(cors());

// Create an HTTP server
const server = http.createServer(app);

configureRoutes(app);

// Start the server
server.listen(port, async () => {
  console.log(`Server is running on port ${port}`);

  try {
    await connect();
    console.log("Connected to Redis");
  } catch (e) {
    console.error("Failed to connect to Redis");
  }
});
