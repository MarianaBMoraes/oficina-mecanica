import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://mariana_bmoraes:mariana@cluster0.kqjgr.mongodb.net/Oficina`
        );
        console.log('Conectado ao MongoDB');

    } catch (error) {
        console.error('Erro ao conectar ao MongoDB', error);

    }
};

connectDB();

export default mongoose;