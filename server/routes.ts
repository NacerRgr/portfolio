import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Basic health check endpoint
  app.get('/api/health', async (req, res) => {
    return res.status(200).json({ status: 'ok' });
  });

  const httpServer = createServer(app);
  return httpServer;
}
