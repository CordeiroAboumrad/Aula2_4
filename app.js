/* Importação de módulos */
import express from 'express';
import mongoose from 'mongoose';
import { studentRouter } from './routes/studentRouter.js';
import dotenv from 'dotenv';

const app = express();

// require('dotenv').config();
const dotEnv = dotenv.config();

process.env.USER_DB_PASSWORD = "007007007";

// Conecta ao MongoDB pelo Mongoose
(async () => {
    try{
        await mongoose.connect(
            `mongodb+srv://${process.env.USERDB}:${process.env.PASSWORDDB}@bootcamp.738aq.mongodb.net/grades?retryWrites=true&w=majority`,
            {
            useNewUrlParser: true,
            useUnifiedTopology: true
            }
        );
        console.log('Conectado ao Mongoose.');
    }catch(error){
        console.log('Erro ao conectar no MongoDB.');
        console.log(error);
    }
})();


app.use(express.json());
app.use(studentRouter);


app.listen(process.env.PORT, () => console.log("API Iniciada"));





//await Account.updateOne({ agencia, conta }, { $inc: { "balance": deposit } })

