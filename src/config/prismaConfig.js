// src/config/prismaConfig.js
import { PrismaClient } from '@prisma/client';
import { fileURLToPath } from 'url';
import path from 'path';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const prisma = new PrismaClient();

prisma.$connect()
  .then(() => console.log('Connected to the database successfully'))
  .catch((error) => {
    console.error('Error connecting to the database:', error);
    process.exit(1);
  });

export default prisma;
