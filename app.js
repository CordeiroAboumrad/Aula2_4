/* Importação de módulos */
import express from 'express';
import mongoose from 'mongoose';
import { studentRouter } from './routes/studentRouter.js';

// Conecta ao MongoDB pelo Mongoose
(async () => {
    try{
        await mongoose.connect(
            'mongodb+srv://jeanpcaboumrad:007007007@bootcamp.738aq.mongodb.net/grades?retryWrites=true&w=majority',
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

const app = express();

app.use(express.json());
app.use(studentRouter);


app.listen(3000, () => console.log("API Iniciada"));





//await Account.updateOne({ agencia, conta }, { $inc: { "balance": deposit } })

