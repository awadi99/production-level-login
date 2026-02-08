import newUser from "../models/loginModel.js";
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
import path from "path"
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const KEY = process.env.JWT_SECRET;
