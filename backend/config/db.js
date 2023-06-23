import mongoose from "mongoose";

const connectDB = async  ()=>{
    try {
     const conn =  await  mongoose.connect(process.env.MONGO_URI)

        console.log(`connected to mongoDb ${conn.connection.host}`);
    } catch (error) {
        process.exit(1)
    }
} 
export default connectDB