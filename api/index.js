import express from 'express'
import dotenv from 'dotenv';
import cors from 'cors'
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import userRoute from './routes/users.js'
import taskRoute from './routes/tasks.js'
import path from 'path';
import { fileURLToPath } from 'url';

import './db/conn.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

dotenv.config()
const port = process.env.PORT || 3000

app.use(bodyParser.json());
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use(express.static(path.join(__dirname, "../frontend/dist")))

app.use('/', userRoute);
app.use('/', taskRoute);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'))
  })

app.get('/', (req, res) => {
    res.send("hello")
})

app.listen(port, (error) => {
    if(error){
        console.log(error)
    } else{
        console.log(`Server is running on port: http://localhost:${port}`)
    }
}
);
