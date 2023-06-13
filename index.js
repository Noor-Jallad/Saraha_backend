import dotenv from 'dotenv';
dotenv.config();
import express from 'express'
import initApp from './src/modules/app.router.js'
import { sendEmail } from './src/Services/sendEmail.js';
const app = express()
initApp(app,express);
