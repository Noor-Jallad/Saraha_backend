import dotenv from 'dotenv';
dotenv.config();
import express from 'express'
import initApp from './src/modules/app.router.js'
import { sendEmail } from './src/Services/sendEmail.js';
const app = express()
const port = 3000

initApp(app,express);

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))