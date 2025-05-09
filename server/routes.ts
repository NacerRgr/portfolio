import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, subject, message } = req.body as ContactFormData;
      
      // Validate input
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ message: 'All fields are required' });
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'Invalid email format' });
      }
      
      // In a real implementation, you would:
      // 1. Store the message in a database
      // 2. Send an email notification
      // 3. Process the contact form data as needed
      
      // For now, we'll just return a success response
      return res.status(200).json({ 
        message: 'Contact form submitted successfully',
        success: true
      });
    } catch (error) {
      console.error('Error processing contact form:', error);
      return res.status(500).json({ message: 'Server error processing your request' });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
