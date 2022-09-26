import express from 'express';
import routes from './routes';
import dotenv from 'dotenv';
import DBConnect from './database/connect';

const app = express();

app.use(express.json());
dotenv.config();
app.use(routes);

DBConnect();

app.listen(3333, () => {
    console.log('💥 Rodando server');
});
