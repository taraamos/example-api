import dotenv from 'dotenv'; 
dotenv.config();

// console.log('Hello World!');
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import corsOptions from './config/cors.options.js';
import defaultRouter from './routes/default.router.js';

const app = express();
const port = process.env.PORT || 3000
app.use(cors(corsOptions))
app.use(helmet())
app.use(express.json())
app.use('/', defaultRouter )

app.listen(port,()=>{
    console.log(`${process.env.APPLICATION_NAME} running at http://localhost:${port}`);
})

//console.log(process.env)