import express from "express";
import cors from "cors";

import apiRoutes from "./routes/api.js";
import redirectRoutes from "./routes/redirect.js";
import healthRoutes from "./routes/health.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { notFound } from "./middleware/notFound.js";


const app = express();

app.use(cors());
app.use(express.json());

// API Routes
app.use("/api", apiRoutes);

// Health Check
app.use("/", healthRoutes);

// Redirect route (must be last)
app.use("/", redirectRoutes);

// Not Found (404)
app.use(notFound);

// Global Error Handler
app.use(errorHandler);

export default app;
