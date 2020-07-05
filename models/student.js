import mongoose from 'mongoose';

const studentSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    subject: {
        type: String,
        require: true
    },
    type:{
        type: String,
        require: true
    },
    value:{
        type: Number,
        require:true,
        // Valida se a nota inserida é menor do que 0
        validate(value){
            if(value<0) throw new Error("Valor negativo para a nota não permitido.");
        }
    },
    lastModified:{
        type: Date,
        default: Date.now()
    }
});

// Terceiro parâmetro obriga o mongoose a colocar a palavra no singular
const studentModel = mongoose.model('student', studentSchema);

// Exportação para uso em outras classes
export {studentModel};
