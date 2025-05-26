import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';

const sqlite = new Database('db/firms.db');

// Create all tables (Auth.js + your custom tables)
sqlite.exec(`
  CREATE TABLE IF NOT EXISTS firms (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    ownership TEXT NOT NULL,
    economicRating TEXT NOT NULL,
    specialization TEXT NOT NULL,
    type TEXT NOT NULL,
    year TEXT NOT NULL,
    debt TEXT NOT NULL,
    activity TEXT NOT NULL,
    price INTEGER NOT NULL,
    priceDisplay TEXT NOT NULL,
    taxes TEXT NOT NULL,
    ebtida TEXT,
    sales TEXT NOT NULL,
    revenue TEXT,
    lost TEXT,
    description TEXT NOT NULL,
    location TEXT NOT NULL,
    vatId TEXT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    userId TEXT,  -- Changed to TEXT to match users.id
    status TEXT DEFAULT 'pending',
    FOREIGN KEY (userId) REFERENCES users (id)
  );
`);

// Export Drizzle instance
export const db = drizzle(sqlite);