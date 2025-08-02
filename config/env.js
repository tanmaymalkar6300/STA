import { config } from 'dotenv';

config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

export const {
    PORT,
    NODE_ENV,
    DB_URI,
    JWT_SECRET,
    JWT_EXPIRES_IN,
    ARCJET_ENV,
    ARCJET_KEY,
    QSTASH_TOKEN,
    QSTASH_URL,
    EMAIL_PASSWORD,
    QSTASH_CURRENT_SIGNING_KEY,
    QSTASH_NEXT_SIGNING_KEY
} = process.env;

// ✅ Add this:
export const SERVER_URL = process.env.SERVER_URL || 'http://localhost:5500';
