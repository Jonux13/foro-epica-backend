import 'dotenv/config';
import express from 'express';
import morgan from 'morgan'
import cors from 'cors';
import path from 'path';


import helmet from 'helmet';



import { postRouter } from './src/routes/post.routes.js';
import { startDb } from './src/config/database.js';





const app = express();

//middlewares
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
app.use(helmet({
  contentSecurityPolicy: false
}))



const hostname = 'localhost';
const port = process.env.PORT || 3000;

  // Redirección a la ruta para la dirección raíz, "/post"


app.use('/', postRouter)

app.listen(port, hostname, () => {
  console.log(`Servidor escuchando en http://${hostname}:${port}`);
  startDb()
}); 



