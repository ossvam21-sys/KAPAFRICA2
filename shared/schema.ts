import { sql } from "drizzle-orm";
import { pgTable, text, varchar, serial, timestamp, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const reservations = pgTable("reservations", {
  id: serial("id").primaryKey(),
  date: text("date").notNull(),
  guests: integer("guests").notNull(),
  name: text("name"),
  email: text("email"),
  phone: text("phone"),
  message: text("message"),
  status: text("status").notNull().default("pending"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const insertReservationSchema = createInsertSchema(reservations, {
  date: z.string().min(1, "La date est requise"),
  guests: z.number().min(1, "Le nombre de personnes est requis").max(20, "Maximum 20 personnes"),
  email: z.string().email("Email invalide").optional(),
  phone: z.string().optional(),
  name: z.string().optional(),
  message: z.string().optional(),
}).omit({ 
  id: true, 
  createdAt: true,
  status: true 
});

export type InsertReservation = z.infer<typeof insertReservationSchema>;
export type Reservation = typeof reservations.$inferSelect;
