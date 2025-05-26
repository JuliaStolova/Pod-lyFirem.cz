import { db } from '$lib/server/db';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import { createTransport } from 'nodemailer';

export function generateRandomString(length: number = 32) : string {
    return crypto.randomBytes(length).toString('hex');
}