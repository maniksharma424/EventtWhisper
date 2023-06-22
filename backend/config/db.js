import mongoose from "mongoose";

const connectDB = async  ()=>{
    try {
     const conn =  await  mongoose.connect(process.env.MONGO_URI)
     console.log(`connected to mongoDb ${conn.connection.host}`);
<<<<<<< HEAD
        console.log(`connected to mongoDb ${conn.connection.host}`);
=======
        
>>>>>>> 9fd3272 (ec2 hosting)
    } catch (error) {
        process.exit(1)
    }
} 
export default connectDB