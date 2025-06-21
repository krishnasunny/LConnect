import { users, lawyers, consultations, type User, type InsertUser, type Lawyer, type InsertLawyer } from "@shared/schema";
import { db } from "./db";
import { eq, count } from "drizzle-orm";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(insertUser: InsertUser): Promise<User>;
  createLawyer(insertLawyer: InsertLawyer): Promise<Lawyer>;
  getAdminStats(): Promise<any>;
  getAllLawyers(): Promise<any[]>;
  approveLawyer(lawyerId: number): Promise<void>;
  getClientConsultations(clientId: number): Promise<any[]>;
  getLawyerConsultations(lawyerId: number): Promise<any[]>;
  getLawyerStats(lawyerId: number): Promise<any>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.email, email));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async createLawyer(insertLawyer: InsertLawyer): Promise<Lawyer> {
    const [lawyer] = await db
      .insert(lawyers)
      .values(insertLawyer)
      .returning();
    return lawyer;
  }

  async getAdminStats(): Promise<any> {
    const [totalLawyers] = await db.select({ count: count() }).from(lawyers);
    const [activeClients] = await db.select({ count: count() }).from(users).where(eq(users.role, 'client'));
    const [pendingApprovals] = await db.select({ count: count() }).from(lawyers).where(eq(lawyers.isApproved, false));
    
    return {
      totalLawyers: totalLawyers.count,
      activeClients: activeClients.count,
      monthlyRevenue: 25000, // Mock data for now
      pendingApprovals: pendingApprovals.count,
    };
  }

  async getAllLawyers(): Promise<any[]> {
    const result = await db
      .select({
        id: lawyers.id,
        fullName: users.fullName,
        email: users.email,
        specialization: lawyers.specialization,
        experience: lawyers.experience,
        isApproved: lawyers.isApproved,
      })
      .from(lawyers)
      .innerJoin(users, eq(lawyers.userId, users.id));
    
    return result;
  }

  async approveLawyer(lawyerId: number): Promise<void> {
    await db
      .update(lawyers)
      .set({ isApproved: true })
      .where(eq(lawyers.id, lawyerId));
  }

  async getClientConsultations(clientId: number): Promise<any[]> {
    const result = await db
      .select()
      .from(consultations)
      .where(eq(consultations.clientId, clientId));
    
    return result;
  }

  async getLawyerConsultations(lawyerId: number): Promise<any[]> {
    const result = await db
      .select()
      .from(consultations)
      .where(eq(consultations.lawyerId, lawyerId));
    
    return result;
  }

  async getLawyerStats(lawyerId: number): Promise<any> {
    const [appointmentsCount] = await db
      .select({ count: count() })
      .from(consultations)
      .where(eq(consultations.lawyerId, lawyerId));
    
    return {
      monthlyEarnings: 5000, // Mock data for now
      appointments: appointmentsCount.count,
      activeClients: 12, // Mock data for now
      rating: 4.8, // Mock data for now
    };
  }
}

export const storage = new DatabaseStorage();