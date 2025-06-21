import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { loginSchema, signupSchema, type User } from "@shared/schema";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

// Middleware to verify JWT token
function authenticateToken(req: any, res: any, next: any) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access token required' });
  }

  jwt.verify(token, JWT_SECRET, (err: any, user: any) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }
    req.user = user;
    next();
  });
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Auth routes
  app.post("/api/auth/login", async (req, res) => {
    try {
      const { email, password } = loginSchema.parse(req.body);
      
      const user = await storage.getUserByEmail(email);
      if (!user) {
        return res.status(401).json({ message: "Invalid email or password" });
      }

      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        return res.status(401).json({ message: "Invalid email or password" });
      }

      const token = jwt.sign(
        { id: user.id, email: user.email, role: user.role },
        JWT_SECRET,
        { expiresIn: "24h" }
      );

      res.json({
        token,
        user: {
          id: user.id,
          email: user.email,
          fullName: user.fullName,
          role: user.role,
        },
      });
    } catch (error) {
      res.status(400).json({ message: "Invalid request" });
    }
  });

  app.post("/api/auth/signup", async (req, res) => {
    try {
      console.log("Signup request body:", req.body);
      const userData = signupSchema.parse(req.body);
      console.log("Parsed user data:", userData);
      
      // Check if user already exists
      const existingUser = await storage.getUserByEmail(userData.email);
      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(userData.password, 10);
      
      const user = await storage.createUser({
        ...userData,
        password: hashedPassword,
      });

      // If lawyer, create lawyer profile
      if (userData.role === "lawyer") {
        await storage.createLawyer({
          userId: user.id,
          specialization: "General Practice",
          experience: "0 years",
          isApproved: false,
        });
      }

      const token = jwt.sign(
        { id: user.id, email: user.email, role: user.role },
        JWT_SECRET,
        { expiresIn: "24h" }
      );

      res.json({
        token,
        user: {
          id: user.id,
          email: user.email,
          fullName: user.fullName,
          role: user.role,
        },
      });
    } catch (error) {
      console.error("Signup error:", error);
      if (error instanceof Error) {
        console.error("Error message:", error.message);
        console.error("Error stack:", error.stack);
      }
      res.status(400).json({ message: "Invalid request", error: error.message });
    }
  });

  app.get("/api/auth/me", authenticateToken, async (req: any, res) => {
    try {
      const user = await storage.getUser(req.user.id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      res.json({
        id: user.id,
        email: user.email,
        fullName: user.fullName,
        role: user.role,
      });
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  });

  app.post("/api/auth/logout", authenticateToken, async (req: any, res) => {
    try {
      // In a real application, you might want to invalidate the token
      // For now, we'll just send a success response
      res.json({ message: "Logged out successfully" });
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  });

  // Admin routes
  app.get("/api/admin/stats", authenticateToken, async (req: any, res) => {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Admin access required" });
    }

    try {
      const stats = await storage.getAdminStats();
      res.json(stats);
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  });

  app.get("/api/admin/lawyers", authenticateToken, async (req: any, res) => {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Admin access required" });
    }

    try {
      const lawyers = await storage.getAllLawyers();
      res.json(lawyers);
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  });

  app.put("/api/admin/lawyers/:id/approve", authenticateToken, async (req: any, res) => {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Admin access required" });
    }

    try {
      const lawyerId = parseInt(req.params.id);
      await storage.approveLawyer(lawyerId);
      res.json({ message: "Lawyer approved successfully" });
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  });

  // Client routes
  app.get("/api/client/consultations", authenticateToken, async (req: any, res) => {
    if (req.user.role !== "client") {
      return res.status(403).json({ message: "Client access required" });
    }

    try {
      const consultations = await storage.getClientConsultations(req.user.id);
      res.json(consultations);
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  });

  // Lawyer routes
  app.get("/api/lawyer/consultations", authenticateToken, async (req: any, res) => {
    if (req.user.role !== "lawyer") {
      return res.status(403).json({ message: "Lawyer access required" });
    }

    try {
      const consultations = await storage.getLawyerConsultations(req.user.id);
      res.json(consultations);
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  });

  app.get("/api/lawyer/stats", authenticateToken, async (req: any, res) => {
    if (req.user.role !== "lawyer") {
      return res.status(403).json({ message: "Lawyer access required" });
    }

    try {
      const stats = await storage.getLawyerStats(req.user.id);
      res.json(stats);
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
