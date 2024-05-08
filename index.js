import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { assets } from './config/assetPath.js';
dotenv.config();

const app = express();

app.locals.assets = assets;

// Serve static files from the 'public' folder
app.use(express.static(path.resolve('public')));

app.use(express.json()); // Parses incoming JSON requests
app.use(express.urlencoded({ extended: true })); 

app.set('view engine', 'ejs');
app.set('views', './app/views');

import routes from './routes/web.js';
import apiRoutes from './routes/api.js';

app.use('', routes);
app.use('/api', apiRoutes);

app.listen(process.env.PORT,() => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`);
});
