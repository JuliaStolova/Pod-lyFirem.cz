import Database from 'better-sqlite3';
import { mkdirSync } from 'fs';

mkdirSync('db', { recursive: true });
const db = new Database('db/firms.db');

// Simple user table
db.exec(`
CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS sessions (
  user_id TEXT NOT NULL,
  token TEXT PRIMARY KEY,
  expires_at DATETIME NOT NULL
);
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

export default db;