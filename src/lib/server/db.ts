import Database from 'better-sqlite3';
import { mkdirSync } from 'fs';

mkdirSync('db', { recursive: true });
const db = new Database('db/firms.db');

db.exec(`
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
    vatId TEXT NOR NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    userId INTEGER,
    status TEXT DEFAULT 'pending' -- 'pending'/'allowed'/'rejected'
    );

 CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    name TEXT,
    surname TEXT,
    verified BOOLEAN DEFAULT FALSE,
    verification_token TEXT,
    reset_token TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`)

export default db;